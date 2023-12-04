import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './swiper.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { GetBlogImage, storedLanguage } from '../../../../http/api';
import config from "../../../../config.js";
import axios from 'axios';





const Blogdet = () => {
  const { storageUrl } = config;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const [blogData, setBlogData] = useState({ text: '' });
  const [blogImageData, setBlogImageData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}blog?lang=${await storedLanguage()}`);
        const blogItem = response.data.find((item) => +item.id === +id);
  
        if (blogItem) {
          setBlogData(blogItem);
        } else {
          console.error('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
  
    fetchData();
  }, [id]);
  

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await GetBlogImage();
        const blogItemImages = response.filter((item) => +(item.blog_id) === +id);

        if (blogItemImages && blogItemImages.length > 0) {
          setBlogImageData(blogItemImages);
        } else {
          console.error('Blog images not found');
        }
      } catch (error) {
        console.error('Error fetching blog images:', error);
      }
    };

    fetchImageData();
  }, [id]);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  if (!blogData) {
    return <div>Loading...</div>; 
  }

  
  return (
    <>
      <div className="section news-page">
        <div className="news-header">
          <a href="/news" className="back-button w-inline-block">
            <img src='https://assets-global.website-files.com/61a5df96780de9122a947e2f/61af6e098a993f801c2b9be6_Arrow%202.svg' alt='' />
            <div>back</div>
          </a>
          <h1 className="h1-blue regular news">{blogData.title}</h1>
          <div className="article-date">{blogData.date}</div>
        </div>
        <div className="w-richtext">
        <p dangerouslySetInnerHTML={{ __html: blogData.text }} />
        </div>
        <h1 className="h1-blue">Gallery</h1>

        <div className='images'>

        
          <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {blogImageData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`${storageUrl}${item.image}`} alt={`Blog Image ${index + 1}`} />
            </SwiperSlide>
          ))}
       
      </Swiper>
          
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        loop={blogImageData.length >= 3}
      >
       {blogImageData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`${storageUrl}${item.image}`} alt={`Blog Image ${index + 1}`} />
            </SwiperSlide>
          ))}
       
      </Swiper>
        </div>

        </div>
        
    </>
  )
}



export default Blogdet
