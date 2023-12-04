import React, { useState,useEffect } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { GetSocial, storedLanguage } from '../../http/api';
import axios from 'axios';
import config from '../../config'



const Footer = () => {
  const [aboutMenuData, setaboutMenuData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}aboutmenu?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
            setaboutMenuData(response.data);
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

  const [SocialData, setSocialData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await GetSocial();
              // console.log('API response:', response); 

              if (Array.isArray(response)) {
                setSocialData(response);
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
      <div className='footer'>
        <div className='footer-links-wrapper'>
            <div className='footer-links-p1'>
          <div className="footer-block">
            <h5 className="h5-blue">services</h5>
            {dropMenuData &&
        dropMenuData.map((item) => (
          <Link  key={item.id} to={item.url} className="footer-link">{item.button_text}</Link>
        ))}
      </div>
            
      <div  className="footer-block _2">
        <h5 className="h5-blue">About us</h5>
            {aboutMenuData &&
        aboutMenuData.map((item) => (
                <Link key={item.id} to="/about" className="footer-link">{item.button_text}</Link>
                ))}
                </div>
            </div>
            <div className="footer-divider"></div>
            <div className='footer-links-p1'>
            <div className="footer-block">
            {MenuData &&
        MenuData.map((item) => (
          <Link key={item.id}  to={item.url} className="footer-link">{item.button_text}</Link>
        ))}
                
            </div>
            <div className="footer-block _2">
                <h5 className="h5-blue">Follow us</h5>
                {SocialData &&
        SocialData.map((item) => (
            <a key={item.id} href={item.url} target="_blank" className="footer-link">{item.button_text}</a>
        ))}
            </div>
            </div>
        </div>


      </div>
    </>
  )
}

export default Footer
