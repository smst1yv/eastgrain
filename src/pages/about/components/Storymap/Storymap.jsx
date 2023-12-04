import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../../styled/global.module.css'
import { storedLanguage } from '../../../../http/api';
import axios from 'axios';
import config from '../../../../config'





const Storymap = () => {
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
  return (
    <>
  

      <div className={styles['our-story-sitemap-wrapper']}>
        <div  className={styles['our-story-sitemap']}>
        {aboutMenuData &&
        aboutMenuData.map((item ) => (
          <Link key={item.id} to={`#${item.title}`} className={styles['our-story-link']}>{item.button_text}</Link>
          ))}
          </div>
        <div data-hover="false" data-delay="0" className={styles['section-dropdown']} />
      </div>
    </>
  );
}

export default Storymap;
