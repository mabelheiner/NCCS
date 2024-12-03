import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        <section className='hero-img'>
          <img src="/src/assets/images/newton-county-community-services-logo.png" alt="" />
        </section>
        <section className='mission-statement'>
          <h1>Mission Statement</h1>
          <p>Newton County Community Services is devoted to serving local community by providing ongoing resources in cooperation with other community organizations to improve health, provide nutrition, financial assistance, and public transportation. We strive to improve health and maintain independent living of our community.</p>
        </section>
        <section className='vision-statement'>
          <h1>Vision Statement</h1>
          <p>Meeting people where they are with the resources they need. Local services for local community; people serving people.</p>
        </section>
        <section className='find-us'>
          <h1>Main Office</h1>
          <h3>Mailing Address</h3>
          <p>102 E. State St. PO Box 140 Morocco, IN 47963</p>
          <h3>Office Phone</h3>
          <p>(219)285-6726</p>
          <h3>Fax</h3>
          <p>(219)285-6726</p>
          <h1>Office Hours</h1>
          <p>Mon-Fri 8:00 AM - 4:00 PM</p>
        </section>
        <section className='contact-us'>
          <h1>Main Office Contacts</h1>
          <div className='contact'>
            <h3>Trisha Drain, Executive Director</h3>
            <p>Phone: Extension 5</p>
            <p>Email: dir@ccs-inc.org</p>
          </div>
          <div className='contact'>
            <h3>Dana Kornacki, Transportation Director/Finance</h3>
            <p>Phone: Extension 2</p>
            <p>Email: finance.nccs@gmail.com</p>
          </div>
          <div className='contact'>
            <h3>Blake Heiner, Administrative Assistant (EAP and Food Pantry)</h3>
            <p>Phone: Extension 3</p>
            <p>Email: sec.newtoncss@gmail.com</p>
          </div>          
        </section>
        <section className='other-locations'>
          <h1>Location Contacts</h1>
          <div className='site'>
            <h3>Morocco Site Manager</h3>
            <p>Patricia</p>
            <p>(219)285-2246 Extension 4</p>
          </div>
        </section>
        
    </div>
  )
}

export default Home