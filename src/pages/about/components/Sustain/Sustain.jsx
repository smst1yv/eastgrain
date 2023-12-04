import React, { useState, useEffect } from 'react';
import styles from '../../../../styled/global.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';



const Sustain = () => {
    const { storageUrl } = config;
    const [striveData, setStriveData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${config.apiUrl}strive?lang=${await storedLanguage()}`);
            if (Array.isArray(response.data)) {
                setStriveData(response.data);
            } else {
              console.error('Invalid data structure. Expected an array.');
            }
          } catch (error) {
            console.error('Error fetching strive data:', error);
          }
        };
      
        fetchData();
      }, []);


    const [sustaniData, setSustaniData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${config.apiUrl}sustani?lang=${await storedLanguage()}`);
            if (Array.isArray(response.data)) {
                setSustaniData(response.data);
            } else {
              console.error('Invalid data structure. Expected an array.');
            }
          } catch (error) {
            console.error('Error fetching strive data:', error);
          }
        };
      
        fetchData();
      }, []);

    const [SustaniKey, setSustaniKey] = useState([])
    const sustanikey = 'sustani_key';

useEffect(() => {
  const fetchSustaniKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${sustanikey}?lang=${await storedLanguage()}`)
      setSustaniKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchSustaniKey()
}, [sustanikey])
    
    return (
        <>
            {striveData && striveData.map((item, index) => (
                <div key={index} id='sustainability' className={`${styles.section} ${styles.green}`}>
                    <div className={`${styles['green-image']}`} style={{backgroundImage: `url(${storageUrl}${item.image})`}}></div>
                    <div className={`${styles['green-content-wrapper']}`}>
                        <h2 className={`${styles.h2}`}>{SustaniKey.title}</h2>
                        <div className={`${styles['content-block']}`}>
                            <h4>{item.title_one}</h4>
                            <p>{item.text_one}</p>
                        </div>
                        <div className={`${styles['content-block']}`}>
                            <h4>{item.title_two}</h4>
                            <p>{item.text_two}</p>
                        </div>
                    </div>
                </div>
            ))}


            {sustaniData && sustaniData.map((item, index) => (
            <div key={index} className={`${styles.section} ${styles.sustenabilitate}`} style={{marginBottom:'75px'}}>
            <div className={`${styles['solar-image']}`} style={{backgroundImage : `url(${storageUrl}${item.image})`}}></div>
            <div className={`${styles['csr-content-wrapper']}`}>
                <h2 className={`${styles.h2}`}>{item.title_one}</h2>
                <div className={`${styles['content-block']}`}>
                    <p>{item.text_one}</p>
                </div>
                <div className={`${styles['trash-wrapper']}`}>
                    <h4 className={`${styles['h4-white']}`}>{item.title_two}</h4>
                    <Link to="" className={`${styles.button} ${styles.white} ${styles['hover-white']} ${styles['w-button']}`}>{item.button_text}</Link>
                </div>
            </div>
            <div id='csr' className={`${styles['csr-link']}`}></div>
            <div className={`${styles['trash-background']}`}></div>
        </div>    
            ))}

           
        </>
    );
}

export default Sustain;
