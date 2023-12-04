import React, { useState, useEffect } from 'react'
import styles from '../../../../styled/global.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';

const Portfolio = () => {

  const { storageUrl } = config;

  const [TradeData, setTradeData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}trade?lang=${await storedLanguage()}`);
        if (Array.isArray(response.data)) {
          setTradeData(response.data);
        } else {
          console.error('Invalid data structure. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching strive data:', error);
      }
    };
  
    fetchData();
  }, []);



  const [isWideScreen, setIsWideScreen] = useState(true);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [activeIndex5, setActiveIndex5] = useState(0);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth > 200);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newIndex = Math.floor(scrollY / 420);

    if (newIndex !== activeIndex1) {
      setActiveIndex1(newIndex);
    }
    if (newIndex !== activeIndex2) {
      setActiveIndex2(newIndex);
    }
    if (newIndex !== activeIndex3) {
      setActiveIndex3(newIndex);
    }
    if (newIndex !== activeIndex4) {
      setActiveIndex4(newIndex);
    }
    if (newIndex !== activeIndex5) {
      setActiveIndex5(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex1, activeIndex2, activeIndex3, activeIndex4, activeIndex5]);

  const dynamicStyles = isWideScreen
    ? TradeData.map((item, index) => ({
      willChange: 'opacity',
      opacity: index === activeIndex1 ? 1 : 0,
    }))
    : [];

  const changeStyles = isWideScreen
    ? TradeData.map((item, index) => ({
      color: index === activeIndex1 ? 'rgb(0, 134, 216)' : 'rgb(120, 133, 166)',
    }))
    : [];

  function convertNumberToWord(number) {
    switch (number) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'tree';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      default: return '';
    }
  }


  const [TradeKey, setTradeKey] = useState([])
  const tradekey = 'trade_key';

useEffect(() => {
const fetchTradeKey = async  () => {
  try {
    const responseKey = await axios.get(`${config.apiUrl}translation/${tradekey}?lang=${await storedLanguage()}`)
    setTradeKey(responseKey.data)
  } catch (error) {
    console.error('Error', error);
  }
}
fetchTradeKey()
}, [tradekey])

const [TradeTextKey, setTradeTextKey] = useState([])
  const tradetextkey = 'trade_text_key';

useEffect(() => {
const fetchTradeTextKey = async  () => {
  try {
    const responseKey = await axios.get(`${config.apiUrl}translation/${tradetextkey}?lang=${await storedLanguage()}`)
    setTradeTextKey(responseKey.data)
  } catch (error) {
    console.error('Error', error);
  }
}
fetchTradeTextKey()
}, [tradetextkey])
  return (
    <>

      <div data-w-id="3d0156c4-4a8f-1ef6-914a-d7a3f63f37cc" className={`${styles.section} ${styles['services-trade']}`}>
        <div className={`${styles['services-first-block-trade']} ${styles.kereskedelem}`}>
          <h1 className={`${styles['h1-blue']} ${styles['margin-bottom']} ${styles['margin-left']} ${styles.desktop}`}>{TradeKey.title}</h1>
          <h5 className={`${styles['h5-blue']} ${styles['margin-left']} ${styles.portfolio} ${styles.desktop}`}>{TradeTextKey.title}</h5>


          {TradeData &&
            TradeData.map((item, index) => (
              <div key={index} className={`${styles['trade-wrapper']} ${styles._1}`}>
                <Link to="#gabonafelek" className={`${styles['trade-tab']} ${styles._1} ${styles['w-inline-block']}`} style={changeStyles[index]}>
                  <div className={`${styles['text-block']}`}>{item.title}</div>
                </Link>
                <div className={`${styles['trade-content']} ${styles._1}`} style={dynamicStyles[index]}>
                  <div className={`${styles['services-cover-image']}`} style={{ backgroundImage: `url(${storageUrl}/${item.image})` }}></div>
                  <div className={`${styles['services-details-wrapper']} ${styles.trade}`}>
                    <h3 className={`${styles['h3-white']} ${styles.mobile}`}>{item.title}</h3>
                    <p className={`${styles.paragraph} ${styles.white}`}>{item.text}</p>
                    <ul role="list" className={`${styles.list}`}>
                      {Array.from({ length: 6 }, (_, i) => {
                        const liValue = item[`li_${i + 1}`] || item[`li_${convertNumberToWord(i + 1)}`];

                        return liValue ? (
                          <li key={i} className={`${styles['list-item']}`}>
                            {liValue}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}



        </div>

        <div className={`${styles['services-links-wrapper']}`}>
          <div id='intro' className={`${styles['trade-section']}`}></div>
          <div id='gabonafelek' className={`${styles['trade-section']}`}></div>
          <div id='olajos-magvak' className={`${styles['trade-section']}`}></div>
          <div id='takarmayni-alapanyagok' className={`${styles['trade-section']}`}></div>
          <div id='mutragya' className={`${styles['trade-section']} ${styles.last}`}></div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
