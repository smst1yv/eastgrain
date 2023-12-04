import React, { useState , useEffect } from 'react'
import styles from '../../styled/global.module.css'
import { Link , useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {  storedLanguage } from '../../http/api';
import axios from 'axios';
import config from '../../config'



const Headertwo = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(storedLanguage );

  const handleLanguageChange = async (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    localStorage.setItem('lang', selectedValue);
    window.location.reload();

  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  const { storageUrl } = config;

  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClicktwo = () => {
    setMenuOpen(!menuOpen);
  };

   const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [MenuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}menu?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setMenuData(response.data);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching strive data:', error);
      }
    };
  
    fetchData();
  }, []);

  const [dropMenuData, setDropMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}dropmenu?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setDropMenuData(response.data);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching strive data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const [menuTextKey, setMenuTextKey] = useState([])
  const menutextkey = 'menu_text';

  useEffect(() => {
    const fetchMenuTextKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${menutextkey}?lang=${await storedLanguage()}`)
        setMenuTextKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchMenuTextKey()
  }, [menutextkey])
  

  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
  };

  const [LogoData, setLogoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}logo?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setLogoData(response.data);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching strive data:', error);
      }
    };
  
    fetchData();
  }, []);
  return (
    <>
      <div className='header-menu'>
        <div className='menu-logo'  style={{ backgroundColor: '#fff'}}>
        <div className={`header-menus ${scrollPosition >= 3200 ? 'scrolled' : ''}`}>
          <div className='menu-logos'>
          {LogoData &&  LogoData .filter(item => item.id === 2) .map((item) => (
          <img key={item.id} onClick={handleLogoClick}  className='blueimg' style={{display:'block',cursor:'pointer'}} src={`${storageUrl}${item.image}`} alt=''/>
          ))}
          </div>
          <div className='drop-open'>
          <i className={`fas fa-bars ${menuOpen ? 'hidden' : 'block'}`} onClick={handleClicktwo}></i>
          <i className={`fas fa-xmark ${menuOpen ? 'block' : 'hidden'}`} onClick={handleClicktwo}></i>
          </div>
          <div className={menuOpen ? 'menu-items' : 'menu-items hidden'}>
            <div className='service-port'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} style={{ color:'#000'}}>
            {menuTextKey.title} <i className="fa-solid fa-angle-down"></i>
            <ul style={{backgroundColor:'#fff'}} className={`drop-menu ${isMenuVisible ? 'display-block' : ''}`}>
              {dropMenuData &&
        dropMenuData.map((item) => (
          <li key={item.id}><Link style={{ color: '#000' }} to={item.url} >{item.button_text}</Link></li> 
        ))}
            </ul>
            </div>
            {MenuData &&
         MenuData.map((item) => (
            <Link key={item.id}  style={{ color: '#000' }} to={item.url}>{item.button_text}</Link>
        ))}

            <Link style={{ color: '#000', border: '1px solid #000'}} to='/contact' className="navlink white-contact w-nav-link">Contact</Link>
            <div className='language-dropdown w-dropdown'>
            <div className='navlink language-switch white w-dropdown-toggle' style={{  border: scrollPosition >= 3200 ? '1px solid #000' : '1px solid #fff',padding: '0' }}>
        <select value={selectedLanguage} onChange={handleLanguageChange} style={{backgroundColor: '#fff' , color:'#000' , padding : '10px 10px'}}> 
          <option value='az' key='az' style={{background:'#000',color:'#fff'}}>AZ</option>
          <option value='en' key='en' style={{background:'#000',color:'#fff'}}>EN</option>
          <option value='ru' key='ru' style={{background:'#000',color:'#fff'}}>RU</option>
        </select>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Headertwo
