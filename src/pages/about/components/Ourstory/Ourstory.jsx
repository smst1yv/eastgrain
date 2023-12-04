import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../../styled/global.module.css'
import { storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';





const Ourstory = () => {
  const { storageUrl } = config;

  const [ourStoryKey, setOurStoryKey] = useState([])
const ourstorykey = 'our_story_key';

useEffect(() => {
  const fetchOurStoryKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${ourstorykey}?lang=${await storedLanguage()}`)
      setOurStoryKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchOurStoryKey()
}, [ourstorykey])


  const [storyData, setStoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}story?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setStoryData(response.data);
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

<div className={`${styles.section} ${styles['our-story']}`} id='our-story'>
  <h5 className={`${styles['h5-blue']} ${styles.ourstory}`}>{ourStoryKey.title}</h5>

  <div className={`${styles['our-story-wrapper']} ${styles['w-dyn-list']}`}>
    <div className={`${styles['our-story-list']} ${styles['w-dyn-items']}`}>
      {storyData &&
        storyData.map((item, index) => {
          const imageUrl = `${storageUrl}${item.image}`;

          const srcSet = `
            ${imageUrl} 500w,
            ${imageUrl} 800w,
            ${imageUrl} 859w
          `;

          return (
            <div
              key={index} 
              data-w-id="a0c31ba8-251a-fcc7-22c3-882c24d377b4"
              style={{
                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                opacity: 1,
              }}
              role="listitem"
              className={`${styles['our-story-image-item']} ${styles['w-dyn-item']}`}
            >
              <img
                src={imageUrl}
                loading="lazy"
                alt=""
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 45vw, (max-width: 1439px) 34vw, (max-width: 1919px) 32vw, 24vw"
                srcSet={srcSet}
                className={`${styles['our-story-image']}`}
              />
              <div className={`${styles['our-story-content-item']}`}>
                <h1 className={`${styles['margin-top']} ${styles['h1-blue']}`}>{item.title}</h1>
                <div className={`${styles['story-description']} ${styles['w-richtext']}`}>
                  <p>{item.text}</p>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  </div>
</div>
    </>
  )
}

export default Ourstory
