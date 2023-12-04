import React, { useState , useEffect } from 'react'
import styles from '../../../../styled/global.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import {  storedLanguage } from '../../../../http/api';
import config from '../../../../config'
import axios from 'axios';


const Group = () => {

    const [blogData, setBlogData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${config.apiUrl}blog?lang=${await storedLanguage()}`);
            if (Array.isArray(response.data)) {
                setBlogData(response.data);
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

            <div className={`${styles.section} ${styles.news}`}>
                <div className={`${styles['news-container']}`}>

                    <div id="w-node-_8301d564-4f49-cedb-085d-20c173514f2d-383ae574" className={`${styles['news-list-wrapper']} ${styles['w-dyn-list']} ${styles.single}`}>
                        <div role="list" className={`${styles['w-dyn-items']} ${styles['news-list']} ${styles.single}`}>
                        {blogData && blogData.length > 0 && (
                            <div  role="listitem" className={`${styles['w-dyn-item']} ${styles['news-item']} ${styles.first}`}>
                                <Link to={`/blogdetail/${blogData[0].id}`} className={`${styles['news-link']} ${styles['w-inline-block']} ${styles.first}`}>
                                    <h4 className={`${styles['h4-light-blue']}`}>{blogData[0].title}</h4>
                                    <p className={`${styles.white} ${styles.p1} ${styles['w-dyn-bind-empty']}`}></p>
                                    <div className={`${styles['news-footer']}`}>
                                        <p className={`${styles.date} ${styles.p1}`} >{blogData[0].date}</p>
                                        <img src='https://assets-global.website-files.com/61a5df96780de9122a947e2f/61a602ae5f1c452eb0251973_Arrow%201.svg' loading='lazy' alt='' />
                                    </div>
                                </Link>
                            </div>
                            )}
                        </div>
                    </div>

                    <div id='w-node-_62c79e8d-c8f4-e88d-723f-a6a78017a3f9-383ae574' className={`${styles['news-list-wrapper']} ${styles.rest} ${styles['w-dyn-list']}`}>

                        <div role='list' className={`${styles['news-list']} ${styles['w-dyn-items']}`}>
                            {blogData && blogData.slice(1).map((item, index) => (
                                <div key={index} id={index + 2} role='listitem' className={`${styles['news-item']} ${styles['w-dyn-item']}`}>
                                <Link to={`/blogdetail/${item.id}`} className={`${styles['news-link']} ${styles['w-inline-block']}`}>
                                    <h4 className={`${styles['h4-blue']}`}>{item.title}</h4>
                                    <p className={`${styles.p1} ${styles.dark} ${styles['w-dyn-bind-empty']}`}>{item.text}</p>
                                    <div className={`${styles['news-footer']}`}>
                                        <p className={`${styles.p1} ${styles.date}`}>{item.date}</p>
                                        <img src='https://assets-global.website-files.com/61a5df96780de9122a947e2f/61af6e098a993f801c2b9be6_Arrow%202.svg' loading='lazy' alt=''/>
                                    </div>
                                </Link>
                              </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Group
