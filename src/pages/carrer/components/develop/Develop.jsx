import React, { useState , useEffect } from 'react'
import styles from '../../../../styled/global.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';

const Develop = () => {
  const { storageUrl } = config;

  const [CarrerData, setCarrerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}carrer?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setCarrerData(response.data);
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

   {CarrerData && CarrerData.map((item , index) => (
       <div key={index} className={`${styles.section} ${styles.karrier}`}>
       <div className={`${styles['green-content-wrapper']}`}>
         <h2 className={`${styles.h2}`}>{item.title}</h2>
         <div className={`${styles.text} ${styles['content-block']}`}>
         <p>{item.text}<br/></p>
         </div>
       </div>
       <div className={`${styles['karrier-image']}`}>
         <div data-autoplay="true" data-loop="true" data-wf-ignore="true" className={`${styles['career-video']} ${styles['w-background-video']} ${styles['w-background-video-atom']}`} data-poster-url="https://assets-global.website-files.com/61a5df96780de9122a947e2f/6241635689526c5083d1ff21_V1 EastGrain Iroda FullHD 20mbps (1)-poster-00001.jpg">
           <video id='3b6e98c0-4103-40fb-4bd2-c75e47d74edd-video' autoPlay loop style={{ objectFit: 'cover',
     }} muted playsInline data-wf-ignore="true" data-object-fit="cover" >
       <source src={`${storageUrl}${item.carrer_video}`} data-wf-ignore="true" />
     </video>
         </div>
       </div>
     </div>
      ))}
    
      
      <div className={`${styles.section} ${styles.jobs}`}></div>
    </>
  )
}

export default Develop
