import React, { useState , useEffect } from 'react';
import styles from '../../../../styled/global.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { storedLanguage } from '../../../../http/api';
import axios from 'axios';
import config from '../../../../config'


const Hungary = () => {
  const { storageUrl } = config;

  const [hungaryData, setHungaryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}hungary?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setHungaryData(response.data);
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
    {hungaryData && hungaryData.map((item, index) => (
      <div key={index} id='eastgrain-hungary' className={`${styles.section} ${styles.hungary}`}>
        <div className={`${styles['green-image']} ${styles.hungary}`}style={{backgroundImage: `url(${storageUrl}${item.image})`}}></div>
        <div className={`${styles['hu-content-wrapper']}`}>
            <h2 className={`${styles.h2}`}>{item.title}</h2>
            <div className={`${styles['content-block']}`}>
                <p>{item.text}</p>
                <a href={item.url}className={`${styles.button} ${styles.antracit} ${styles['margin-top']} ${styles['w-button']}`}>{item.button_title}</a>
            </div>
        </div>
      </div>
))}
      
    </>
  )
}

export default Hungary
