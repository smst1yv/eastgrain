import React, { useState, useEffect } from 'react'
import { popular } from "../../../../dummyData";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { storedLanguage } from '../../../../http/api';
import axios from 'axios';
import config from '../../../../config'



const Popular = () => {
    const { storageUrl } = config;

    

    const [isWideScreen, setIsWideScreen] = useState(true);
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);
    const [activeIndex4, setActiveIndex4] = useState(0);
    const [activeIndex5, setActiveIndex5] = useState(0);

    const handleResize = () => {
        setIsWideScreen(window.innerWidth > 2050);
    };

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newIndex = Math.floor(scrollY / 610);

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
  ? Array.from({ length: 5 }, (_, index) => {
      return {
        willChange: 'opacity',
        opacity: index === activeIndex1 ? 1 : 0,
      };
    })
  : [];

  
    const [homeSliderData, setHomeSliderData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${config.apiUrl}slider?lang=${await storedLanguage()}`);
            if (Array.isArray(response.data)) {
                setHomeSliderData(response.data);
            } else {
              console.error('Invalid data structure. Expected an array.');
            }
          } catch (error) {
            console.error('Error fetching strive data:', error);
          }
        };
      
        fetchData();
      }, []);



    const [menuTextKey, setMenuTextKey] = useState([])
  const menutextkey = 'menu_text';

  useEffect(() => {
    const fetchMenuTextKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${menutextkey}?lang=${await storedLanguage()}`)
        setMenuTextKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchMenuTextKey()
  }, [menutextkey])

  const [sliderTradeKey, setSliderTradeKey] = useState([])
  const slidertradekey = 'home_slider_trade';

  useEffect(() => {
    const fetchSliderTradeKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${slidertradekey}?lang=${await storedLanguage()}`)
        setSliderTradeKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchSliderTradeKey()
  }, [slidertradekey])
   
  const [sliderLogisticKey, setSliderLogisticKey] = useState([])
  const sliderlogisticekey = 'home_slider_logistic';

  useEffect(() => {
    const fetchSliderLogsiticKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${sliderlogisticekey}?lang=${await storedLanguage()}`)
        setSliderLogisticKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchSliderLogsiticKey()
  }, [slidertradekey])

  const [sliderStorageKey, setSliderStorageKey] = useState([])
  const sliderstoragekey = 'home_slider_storage';

  useEffect(() => {
    const fetchSliderStorageKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${sliderstoragekey}?lang=${await storedLanguage()}`)
        setSliderStorageKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchSliderStorageKey()
  }, [sliderstoragekey])


  const [sliderProcessingKey, setSliderProcessingKey] = useState([])
  const sliderprocessingkey = 'home_slider_processing';

  useEffect(() => {
    const fetchSliderProcessingKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${sliderprocessingkey}?lang=${await storedLanguage()}`)
        setSliderProcessingKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchSliderProcessingKey()
  }, [sliderstoragekey])

  const [sliderIntegrationKey, setSliderIntegrationKey] = useState([])
  const sliderintegrationkey = 'home_slider_integration';

  useEffect(() => {
    const fetchSliderIntegrationKey = async  () => {
      try {
        const responseKey = await axios.get(`${config.apiUrl}translation/${sliderintegrationkey}?lang=${await storedLanguage()}`)
        setSliderIntegrationKey(responseKey.data)
      } catch (error) {
        console.error('Error', error);
      }
    }
    fetchSliderIntegrationKey()
  }, [sliderintegrationkey])
   

    return (
        <>
            <section className='popular'>
                <div data-w-id="2dc902ba-48c2-9fb6-8350-91817e174fe4" className='section services-presentation'>
                    <div className="scroll-links">
                        <div id="kereskedelem" className="scroll-section"></div>
                        <div id="logisztika" className="scroll-section"></div>
                        <div id="tarolas" className="scroll-section"></div>
                        <div id="felfolgozas" className="scroll-section"></div>
                        <div id="integracio" className="scroll-section last"></div>
                    </div>

                    <div className='portfolio-wrapper'>
                        <h5 className='portfolio-title'>{menuTextKey.title}</h5>
                        <div className='services-columns'>
                            <div className='services-list list'>
                                <a href="#kereskedelem" className="section-link w-inline-block w--current">
                                    <div className="service-side-1 kereskedelem">
                                        <img src="https://assets-global.website-files.com/61a5df96780de9122a947e2f/61b07fe5cfb75667adc04f60_kereskedelem.svg"
                                            loading="lazy"
                                            alt=""
                                            className="services-icon kereskedelem"
                                            style={dynamicStyles[0]}
                                        />
                                        <div className="vertical-divider"></div>
                                        <h4
                                            className="h4-services kereskedelem"
                                            style={{
                                                color: 'rgb(146, 156, 183)',
                                                willChange: 'transform',
                                                transform: 'translate3d(0px, 0px, 0px) scale3d(1.09625, 1.09625, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                            {sliderTradeKey.title}
                                        </h4>
                                    </div>
                                </a>
                                <a href="#logisztika" className="section-link w-inline-block">
                                    <div className="service-side-1 logisztika">
                                        <img
                                            src="https://assets-global.website-files.com/61a5df96780de9122a947e2f/61b07fe5c7555d2b68f920de_logisztika.svg"
                                            loading="lazy"
                                            alt=""
                                            className="services-icon logisztika"
                                            style={dynamicStyles[1]}
                                            />
                                        <div className="vertical-divider"></div>
                                        <h4
                                            className="h4-services logisztika"
                                            style={{
                                                color: 'rgb(120, 133, 166)',
                                                willChange: 'transform',
                                                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                            {sliderLogisticKey.title}
                                        </h4>
                                    </div>
                                </a>
                                <a href="#tarolas" className="section-link w-inline-block">
                                    <div className="service-side-1 t-rol-s">
                                        <img
                                            src="https://assets-global.website-files.com/61a5df96780de9122a947e2f/61b07fe52d384759cf1909c3_ta%CC%81rola%CC%81s.svg"
                                            loading="lazy"
                                            alt=""
                                            className="services-icon t-rol-s"
                                            style={dynamicStyles[2]}
                                        />
                                        <div className="vertical-divider"></div>
                                        <h4
                                            className="h4-services t-rol-s"
                                            style={{
                                                color: 'rgb(120, 133, 166)',
                                                willChange: 'transform',
                                                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                             {sliderStorageKey.title}
                                        </h4>
                                    </div>
                                </a>
                                <a href="#felfolgozas" className="section-link w-inline-block">
                                    <div className="service-side-1 feldolgoz-s">
                                        <img
                                            src="https://assets-global.website-files.com/61a5df96780de9122a947e2f/61b07fe55324e8f11e4abb5a_feldolgoza%CC%81s.svg"
                                            loading="lazy"
                                            alt=""
                                            className="services-icon feldolgoz-s"
                                            style={dynamicStyles[3]}
                                        />
                                        <div className="vertical-divider"></div>
                                        <h4
                                            className="h4-services feldolgoz-s"
                                            style={{
                                                color: 'rgb(120, 133, 166)',
                                                willChange: 'transform',
                                                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                                transformStyle: 'preserve-3d'
                                            }}
                                        >
                                            {sliderProcessingKey.title}
                                        </h4>
                                    </div>
                                </a>
                                <a href="#integracio" className="section-link w-inline-block">
                                    <div className="service-side-1 integr-ci">
                                        <img
                                            src="https://assets-global.website-files.com/61a5df96780de9122a947e2f/61b07fe571ee511af6628814_integra%CC%81cio%CC%81.svg"
                                            loading="lazy"
                                            alt=""
                                            className="services-icon integr-ci"
                                            style={dynamicStyles[4]}
                                            />
                                        <div className="vertical-divider"></div>
                                        <h4
                                            className="h4-services integr-ci"
                                            style={{
                                                willChange: 'transform',
                                                transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                                transformStyle: 'preserve-3d',
                                                color: 'rgb(120, 133, 166)'
                                            }}
                                        >
                                            {sliderIntegrationKey.title}
                                        </h4>
                                    </div>
                                </a>
                            </div>
                            <div className='services-list details'>
                                {homeSliderData && homeSliderData.map((item , index) => (
                                    <div className="service-content kereskedelem" style={ dynamicStyles[index] } key={index}>
                                        <h3 className="h3-white mobile"></h3>
                                        <div className="service-image kereskedelem" style={{backgroundImage: `url(${storageUrl}${item.image})`}}></div>
                                        <p className="paragraph white service-description">{item.text}.</p>
                                        <a href={item.url} className="see-more-link w-inline-block">
                                            <div>{item.button_title}</div>
                                            <img src="https://assets-global.website-files.com/61a5df96780de9122a947e2f/61a602ae5f1c452eb0251973_Arrow%201.svg" loading="lazy" alt="" />
                                        </a>
                                    </div>
                                ))}
                               
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Popular
