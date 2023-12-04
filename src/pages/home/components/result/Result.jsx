import React, { useState, useEffect } from 'react'
import { storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';
const Result = () => {
    const { storageUrl } = config;
  const [homeCounterData, setHomeCounterData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}counter?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setHomeCounterData(response.data);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching strive data:', error);
      }
    };
  
    fetchData();
  }, []);

const [ourResultKey, setOurResultKey] = useState([])
  const ourresultkey = 'our_result_key';

  useEffect(() => {
    const fetchOurResultKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${ourresultkey}?lang=${await storedLanguage()}`)
        setOurResultKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchOurResultKey()
  }, [ourresultkey])

  return (
    <>
      <div className='section achievements'>
        <div className='header-wrappper'>
            <h5 className='h5-dark'>{ourResultKey.title}</h5>
        </div>
        {homeCounterData && homeCounterData.map((item , index) => (
          <div key={index} className='eredm-nyek-wrapper'>
          <div className='achievements-container'>
              <div className='achievement-block'>
                  <h1 id='w-node-f74c857d-5430-e41e-f449-453f1ba8ba07-789373ab' className='counterup'>{item.counter_one}</h1>
                  <p id='w-node-d99d06c2-cf06-b6a5-79a4-0e88ecda5091-789373ab' className='paragraph white'>{item.co_title}</p>
              </div>
              <div className="achievement-divider"></div>
              <div className="achievement-block">
                  <h1 id="w-node-_2a788798-e60d-bf7a-0cad-2fcffd6ece3f-789373ab" className="counterup">{item.counter_two}</h1>
                  <p id="w-node-_2a788798-e60d-bf7a-0cad-2fcffd6ece41-789373ab" className="paragraph white">{item.ct_title}<br/></p>
              </div>
              <div className="achievement-divider"></div>
              <div className="achievement-block">
                  <div className="more-than-wrapper">
                      <h1 id="w-node-_8a1436d6-fb41-2c93-be03-ee382ea8a940-789373ab" className="counterup">{item.counter_tree}</h1>
                      <h1 className="plus">+</h1>
                      </div>
                      <p id="w-node-_8a1436d6-fb41-2c93-be03-ee382ea8a942-789373ab" className="paragraph white">{item.ctr_title}</p>
              </div>
              <div className="achievement-divider"></div>
              <div className="achievement-block">
                  <div id="w-node-e23eadc3-5860-a3e8-57b4-79be82ed038d-789373ab" className="more-than-wrapper">
                      <h1 id="w-node-f887c411-5137-7807-37e0-2dbe70efbbc2-789373ab" className="counterup">{item.counter_four}</h1>
                      <h1 className="plus">+</h1>
                      </div>
                      <p id="w-node-f887c411-5137-7807-37e0-2dbe70efbbc4-789373ab" className="paragraph white">{item.ctf_title}</p>
              </div>
              <div className="achievement-divider"></div>
              <div className="achievement-block">
                  <h1 id="w-node-_03237fc2-353f-cfa6-dd05-7e9d67904b7e-789373ab" className="counterup">{item.counter_five}</h1>
                  <p id="w-node-_03237fc2-353f-cfa6-dd05-7e9d67904b80-789373ab" className="paragraph white">{item.ctfi_title}</p>
              </div>
          </div>
          <div className='achievemnts-img' style={{backgroundImage: `url(${storageUrl}${item.image})`}}></div>
      </div>
      ))}
        
      </div>
    </>
  )
}

export default Result
