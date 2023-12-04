import React, { useState , useEffect } from 'react'
import styles from '../../../../styled/global.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { storedLanguage } from '../../../../http/api.jsx';
import config from '../../../../config'
import axios from 'axios';

const Mappages = () => {
    const { storageUrl } = config;
    const [storageData, setStorageData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${config.apiUrl}storage?lang=${await storedLanguage()}`);
            if (Array.isArray(response.data)) {
                setStorageData(response.data);
            } else {
              console.error('Invalid data structure. Expected an array.');
            }
          } catch (error) {
            console.error('Error fetching strive data:', error);
          }
        };
      
        fetchData();
      }, []);

const [storageMapData, setStorageMapData] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}storagemap?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
            setStorageMapData(response.data);
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
   
      <div className={`${styles.section} ${styles.services} ${styles.tarolas}`}>
      {storageData && storageData.map((item, index) => (
    <div key={index} className={`${styles['services-first-block']}`}>
            <h1 className={`${styles['h1-grey']} ${styles.margin}`}>{item.title}</h1>
            <p className={`${styles.p1} ${styles.dark}`}>{item.text}</p>
            
        </div>
   ))}

{storageMapData && storageMapData.map((item, index) => (
    <div key={index} className={`${styles['services-second-block']} ${styles.tarolas}`}>
    <div className={`${styles['services-cover-image']} ${styles.tarolas}`} style={{ backgroundImage: `url(${storageUrl}${item.image})` }}></div>
    <div className={`${styles['services-details-wrapper']} ${styles.tarolas}`}>
        <h5>{item.title}</h5>
        <div className={`${styles['silo-location-wrapper']}`}>
            <div className={`${styles['silo-location']} ${styles.firat}`}>
                <h4 className={`${styles['h4-white']}`}>{item.map_one}</h4>
                <a href={item.mapone_url} target='_blank' className={`${styles['maps-button']} ${styles['w-inline-block']}`}>
                    <img src='https://assets-global.website-files.com/61a5df96780de9122a947e2f/61b1cf4475fd5461d8f2412c_zmdi_pin.svg' alt='' loading='lazy' className={`${styles['location-pin']}`}/>
                    <div>Google Maps</div>
                </a>
                <p className={`${styles.p1} ${styles.grey0}`}>{item.address_one}</p>
                <a className={`${styles.p1} ${styles.grey0}`} href=''>{item.phone_one}</a>
                <a className={`${styles.p1} ${styles.grey0}`} href=''>{item.email_one}</a>
            </div>
            <div className={`${styles['silo-location']}`}>
            <h4 className={`${styles['h4-white']}`}>{item.map_two}</h4>
                <a href={item.maptwo_url} target='_blank' className={`${styles['maps-button']} ${styles['w-inline-block']}`}>
                    <img src='https://assets-global.website-files.com/61a5df96780de9122a947e2f/61b1cf4475fd5461d8f2412c_zmdi_pin.svg' alt='' loading='lazy' className={`${styles['location-pin']}`}/>
                    <div>Google Maps</div>
                </a>
                <p className={`${styles.p1} ${styles.grey0}`}>{item.address_two}</p>
                <a className={`${styles.p1} ${styles.grey0}`} href=''>{item.phone_two}</a>
                <a className={`${styles.p1} ${styles.grey0}`} href=''>{item.email_two}</a>
            </div>
        </div>
    </div>
</div>
   ))}
        
      </div>
    </>
  )
}

export default Mappages
