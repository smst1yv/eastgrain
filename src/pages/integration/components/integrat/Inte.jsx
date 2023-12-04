import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import config from "../../../../config.js";
import { storedLanguage } from '../../../../http/api.jsx';
import "./style.css";
import axios from 'axios';


const Inte = () => {
  const { storageUrl } = config;
  const [integrationData, setIntegrationData] = useState([{ text: '' }]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}integration?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setIntegrationData(response.data);
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
    {integrationData && integrationData.map((item, index) => (
      <div className='inte' key={index}>
        <div className='inte-ser'>
          <h1 className='h1-blue margin-bottom'>{item.title}</h1>
          <p className='p1 dark'  dangerouslySetInnerHTML={{ __html: item.text }} />
          <div class="more-info-wrapper">
            <a href={item.url} target="_blank" class="button dark w-button">{item.button_text}</a>
          </div>
        </div>
        <div class="services-second-block integracio" style={{ backgroundImage: `url(${storageUrl}${item.image})` }}></div>
      </div>
    ))}
      
    </>
  )
}

export default Inte
