import React, { useState, useEffect } from 'react';
import styles from '../../../../styled/global.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';


const Cargolog = () => {
const { storageUrl } = config;
  const [logisticData, setLogisticData] = useState([{ text: '' }]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}logistic?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setLogisticData(response.data);
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
      {logisticData &&
        logisticData.map((item, index) => (
          <div key={index} className={`${styles.section} ${styles.services}`}>
            <div className={`${styles['services-first-block']}`}>
              <h1 className={`${styles['h1-blue']} ${styles['margin-bottom']}`}>{item.title}</h1>
              <p className={`${styles.p1} ${styles.dark}`} dangerouslySetInnerHTML={{ __html: item.text }} />
              <div className={`${styles['more-info-wrapper']}`}>
                <a href="" target="_blank" className={`${styles.button} ${styles.dark} ${styles['w-button']}`} >{item.button_text}</a>
              </div>
            </div>
            <div className={`${styles['services-second-block']} ${styles.logisztika}`} style={{ backgroundImage: `url(${storageUrl}${item.image})` }}>

            </div>
          </div>
        ))}
    </>
  );
}

export default Cargolog;
