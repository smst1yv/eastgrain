import React, { useState , useEffect } from 'react';
import styles from '../../../../styled/global.module.css'
import team from './team.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { GetTeamImage, storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';



const Team = () => {
  const { storageUrl } = config;


  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}team?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setTeamData(response.data);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching strive data:', error);
      }
    };
  
    fetchData();
  }, []);




    const [mainImage, setMainImage] = useState('');
    const [teamImageData, setTeamImageData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await GetTeamImage();
  
          if (Array.isArray(response)) {
            setTeamImageData(response);
            if (response.length > 0) {
              setMainImage(`${storageUrl}${response[0].image}`);
            }
          } else {
            console.error('Invalid data structure. Expected an array.');
          }
        } catch (error) {
          console.error('Error fetching team image data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleOtherImageClick = (imageUrl) => {
      setMainImage(imageUrl);
    };

    const [TeamKey, setTeamKey] = useState([])
    const teamkey = 'team_key';

useEffect(() => {
  const fetchTeamKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${teamkey}?lang=${await storedLanguage()}`)
      setTeamKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchTeamKey()
}, [teamkey])
 

  return (
    <>
      <div id='team' className={`${styles.section} ${styles.team}`}>
        <h5 className={`${styles['h5-team']}`}>{TeamKey.title}</h5>
        <div className='team-images'>
        <div className='main-image'>
          <img src={mainImage} alt='' />
        </div>
        <div className='other-images'>
          {teamImageData &&
            teamImageData.map((item, index) => (
              <div
                key={index}
                className='o-img'
                onClick={() => handleOtherImageClick(`${storageUrl}${item.image}`)}
              >
                <img src={`${storageUrl}${item.image}`} alt='' />
              </div>
            ))}
        </div>
      </div>

        {teamData && teamData.map((item, index) => (
<div key={index} className={`${styles['team-description-wrapper']}`}>
          <h2 className={`${styles.h2} ${styles.white}`}>{item.title}</h2>
          <div className={`${styles['team-description']}`}>
            <p className={`${styles.paragraph} ${styles.white} ${styles.margin}`}>{item.text}</p>
            <Link to="/carrer" className={`${styles.button} ${styles.white} ${styles['w-button']}`} >{item.button_text} <br /></Link>
          </div>
        </div>
))}
        
      </div>
    </>
  )
}

export default Team
