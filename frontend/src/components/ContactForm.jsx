import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
      }
    
      const handleSubmit = async (e) => {
         e.preventDefault();
    
         try {
          const response = await axios.post('http://localhost:5000/api/contact', formData);
    
          if (response.status === 200) {
            alert('Your message has been sent!');
            setFormData({ name: '', email: '', subject: '', message: '' });
          }
         } catch (error) {
            console.error('Error:', error)
            alert('An error occurred. Please try again later.')
         }
      }
      return (
        <div>    
            <form onSubmit={handleSubmit}>
              <h2>Contact Us</h2>
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type='text'
                  name="name"
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
    
              <div>
                <label htmlFor="email">Your Email</label>
                <input 
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject">Title of Your Message</label>
              <input 
                type='text'
                name='subject'
                placeholder='Title of your email'
                value={formData.subject}
                onChange={handleChange}
                required
              />
              </div>
    
              <div>
                <label htmlFor='message'>Your Message</label>
                <textarea
                  style={{fontFamily: 'sans-serif'}}
                  name='message'
                  placeholder='Your message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ContactForm