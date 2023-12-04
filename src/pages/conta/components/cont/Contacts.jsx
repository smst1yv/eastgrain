import React, { useState , useEffect } from 'react';
import Swal from 'sweetalert2';
import config from '../../../../config'
import axios from 'axios';
import { storedLanguage } from '../../../../http/api';


const Contacts = () => {
    const apiUrl = config.apiUrl;
    const [formData, setFormData] = useState({
        surname: '',
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        fetch(`${apiUrl}contactmessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
      
            Swal.fire({
              icon: 'success',
              title: 'Mesaj Göndərildi!',
              text: 'Təşəkkür Edirik',
            });
          })
          .catch((error) => {
            console.error('Error:', error);
      
            Swal.fire({
              icon: 'error',
              title: 'Xəta',
              text: 'Zəhmət Olmasa Xanaları Doldurun',
            });
          });
      };
    

        const [contlocData, setContlocData] = useState([]);
        useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${config.apiUrl}contloc?lang=${await storedLanguage()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setContlocData(result.data);
        } catch (error) {
            console.error('Error fetching home team data:', error);
        }
    };

    fetchData();
}, []);

const [ContactNameKey, setContactNameKey] = useState([])
const contactnamekey = 'contact_name_key';

useEffect(() => {
  const fetchMenuTextKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${contactnamekey}?lang=${await storedLanguage()}`)
      setContactNameKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchMenuTextKey()
}, [contactnamekey])

const [ContactEmailKey, setContactEmailKey] = useState([])
const contactemailkey = 'contact_email_key';

useEffect(() => {
  const fetchMenuTextKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${contactemailkey}?lang=${await storedLanguage()}`)
      setContactEmailKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchMenuTextKey()
}, [contactemailkey])

const [ContactNumberKey, setContactNumberKey] = useState([])
const contactnumberkey = 'contact_number_key';

useEffect(() => {
  const fetchMenuTextKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${contactnumberkey}?lang=${await storedLanguage()}`)
      setContactNumberKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchMenuTextKey()
}, [contactnumberkey])


const [ContactMessageKey, setContactMessageKey] = useState([])
const contactmessagekey = 'contact_message_key';

useEffect(() => {
  const fetchMenuTextKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${contactmessagekey}?lang=${await storedLanguage()}`)
      setContactMessageKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchMenuTextKey()
}, [contactmessagekey])

const [ContactSurnameKey, setContactSurnameKey] = useState([])
const contactsurnamekey = 'contact_surname_key';

useEffect(() => {
  const fetchMenuTextKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${contactsurnamekey}?lang=${await storedLanguage()}`)
      setContactSurnameKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchMenuTextKey()
}, [contactsurnamekey])

const [ContactSubmitKey, setContactSubmitKey] = useState([])
const contactsubmitkey = 'contact_submit_key';

useEffect(() => {
  const fetchMenuTextKey = async  () => {
    try {
      const responseKey = await axios.get(`${config.apiUrl}translation/${contactsubmitkey}?lang=${await storedLanguage()}`)
      setContactSubmitKey(responseKey.data)
    } catch (error) {
      console.error('Error', error);
    }
  }
  fetchMenuTextKey()
}, [contactsubmitkey])

    return (
        <>
            <div className='section regions'>
            {contlocData && contlocData.map((item, index) => (
            <div key={index} className="eastgrain-contacts">
            <div className="eastgrain-block">
            <h4>{item.title}</h4>
            <a href="" target="_blank" className="contact-text-link">{item.text}</a>
            <a href={item.email} className="contact-text-link">{item.email}</a>
            <a href={item.number} className="contact-text-link">{item.number}</a>
     </div>
 </div>
))}
                

                <div className="section contact-form">
                    <h2>Contact us</h2>
                    <div className="w-form">
                        <form  onSubmit={handleSubmit} id="email-form"  data-name="Email Form" method="POST" className="form" data-wf-page-id="62174c8013c2790207ba57b0" data-wf-element-id="c82984c4-8ed9-4123-64f4-e7b1595684a8" aria-label="Email Form">
                            <div className="form-grid">
                                <div className="input-field">
                                    <label htmlFor="surname" className="field-label">{ContactSurnameKey.title}</label>
                                    <input type="text" className="text-field w-input" onChange={(e)=> handleChange(e)}  name="surname" data-name="Surname" placeholder="Surname" id="Surname" required="" />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="Name" className="field-label">{ContactNameKey.title}</label>
                                    <input type="text" className="text-field w-input" onChange={(e)=> handleChange(e)} name="name" data-name="Name" placeholder="Name" id="Name" required="" />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="email" className="field-label">{ContactEmailKey.title}</label>
                                    <input type="email" className="text-field w-input" onChange={(e)=> handleChange(e)}  name="email" data-name="Email" placeholder="Email" id="Email" required="" />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="phone" className="field-label">{ContactNumberKey.title}</label>
                                    <input type="tel" className="text-field w-input" onChange={(e)=> handleChange(e)} name="phone" data-name="Phone number" placeholder="Phone number" id="Phone-number" />
                                </div>
                            </div>
                            <div  className="input-field message">
                                <label htmlFor="message" className="field-label">{ContactMessageKey.title}</label>
                                <textarea placeholder="" id="Message" onChange={(e)=> handleChange(e)} name="message" data-name="Message" className="text-area w-input">
                                </textarea>
                            </div>
                            <input style={{width:'10rem'}} type="submit" value={ContactSubmitKey.title}   className="submitbutton w-button"  />
                        
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
