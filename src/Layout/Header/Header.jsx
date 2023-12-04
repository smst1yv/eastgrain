import React, { useState, useEffect } from 'react'
import './header.css'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import { GetDropMenu, GetHomeImage, GetMenu , storedLanguage } from '../../http/api'
import config from '../../config'
import axios from 'axios';




const Header = () => {

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

  const [homeImageData, setHomeImageData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetHomeImage();
  
        if (Array.isArray(response)) {
          setHomeImageData(response);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching strive data:', error);
      }
    };
  
    fetchData();
  }, []);

  const [headTitleKey, setHeadTitleKey] = useState([])
  const headtitlekey = 'home_head_title';

  useEffect(() => {
    const fetchHeadTitleKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${headtitlekey}?lang=${await storedLanguage()}`)
        setHeadTitleKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchHeadTitleKey()
  }, [headtitlekey])

  const [headTextKey, setHeadTextKey] = useState([])
  const headtextkey = 'home_head_text';

  useEffect(() => {
    const fetchHeadTextKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${headtextkey}?lang=${await storedLanguage()}`)
        setHeadTextKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchHeadTextKey()
  }, [headtextkey])

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


  

  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/');
  };

 
  return (
    <>
      <div className='header-menu'>
        <div className={`menu-logo ${scrollPosition >= 3200 ? 'scrolled' : ''}`} style={{ backgroundColor: scrollPosition >= 3200 ? '#fff' : '' }}>
        <div className={`header-menus ${scrollPosition >= 3200 ? 'scrolled' : ''}`}>
          <div className='menu-logos'>
          {LogoData &&
        LogoData.map((item) => (
          <img key={item.id} onClick={handleLogoClick} className={`${item.classname} ${scrollPosition >= 3200 ? 'hidden' : ''}`} src={`${storageUrl}${item.image}`} alt='' style={{cursor:'pointer'}} />
          ))}
          </div>
          <div className='drop-open'>
          <i className={`fas fa-bars ${menuOpen ? 'hidden' : 'block'}`} onClick={handleClicktwo}></i>
          <i className={`fas fa-xmark ${menuOpen ? 'block' : 'hidden'}`} onClick={handleClicktwo}></i>
          </div>
          <div className={menuOpen ? 'menu-items' : 'menu-items hidden'}>
            <div className='service-port'onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} style={{ color: scrollPosition >= 3200 ? '#000' : '' }}>
              {menuTextKey.title} <i className="fa-solid fa-angle-down"></i>
            <ul className={`drop-menu ${isMenuVisible ? 'display-block' : ''}`} style={{ backgroundColor: scrollPosition >= 3200 ? '#fff' : '' }}>
            {dropMenuData &&
        dropMenuData.map((item) => (
          <li key={item.id}><Link style={{ color: scrollPosition >= 3200 ? '#000' : '' }} to={item.url} >{item.button_text}</Link></li> 
        ))}

            </ul>
            </div>
            {MenuData &&
        MenuData.map((item) => (
            <Link key={item.id} style={{ color: scrollPosition >= 3200 ? '#000' : '' }} to={item.url}>{item.button_text}</Link>
        ))}
            <Link style={{ color: scrollPosition >= 3200 ? '#000' : '' , border: scrollPosition >= 3200 ? '1px solid #000' : '' }} to='/contact' className="navlink white-contact w-nav-link">Contact</Link>
            <div className='language-dropdown w-dropdown'>
            <div className='navlink language-switch white w-dropdown-toggle' style={{  border: scrollPosition >= 3200 ? '1px solid #000' : '1px solid #fff',padding: '0' }}>
        <select value={selectedLanguage} onChange={handleLanguageChange} style={{color: scrollPosition >= 3200 ? '#000' : '' , backgroundColor: 'rgba(0, 0, 0, 0)' , padding : '10px 10px'}}> 
          <option value='az' key='az' style={{background:'#000'}}>AZ</option>
          <option value='en' key='en' style={{background:'#000'}}>EN</option>
          <option value='ru' key='ru' style={{background:'#000'}}>RU</option>
        </select>
            </div>
            </div>
          </div>
        </div>
        </div>
        {homeImageData && homeImageData.map((item , index) => (
          <div key={index} className='menu-image' style={{ backgroundImage: `linear-gradient(rgba(41, 47, 66, 0.2), rgba(41, 47, 66, 0.2)), url(${storageUrl}${item.image})`}}></div>
      ))}
        <div className='sec-hero'>
          <div className='hero-cont'>
          <h1 className="h0">{headTitleKey.title}</h1>
          <h5 className="subheading">{headTextKey.title}<br/></h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
