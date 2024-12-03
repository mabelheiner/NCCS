import React from 'react'
import Header from '../components/Header'

import {FaMapMarkerAlt} from 'react-icons/fa'

const NutritionSites = () => {

  const siteInfo = [
    {
      name: 'Morocco Site',
      manager: 'Pat Wynn',
      hours: 'Monday-Friday 8:00am-1:30pm',
      phone: '219-285-2246 ext. 4',
      location: '102 E State St. Morocco, IN 47963',
      mapsLink: 'https://www.google.com/maps/place/Newton+County+Community+Services,+Inc./@40.9464146,-87.4646784,15z/data=!4m15!1m8!3m7!1s0x88120ca3f250ad53:0x693eca426f6ab08a!2s102+E+State+St,+Morocco,+IN+47963!3b1!8m2!3d40.9464151!4d-87.4543787!16s%2Fg%2F11c4cprzfj!3m5!1s0x88120958364243a3:0x4419a190fbb3f2f8!8m2!3d40.9463988!4d-87.4543788!16s%2Fg%2F1wbryctv?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: 'Roselawn Site',
      manager: 'Helen Kralovansky',
      hours: 'Monday-Friday 8:00am-2:00pm',
      phone: '219-345-4881',
      location: '10448 N 450 E Demotte, IN 46310',
      mapsLink: 'https://www.google.com/maps/place/Generation+Center/@41.1506695,-87.3163727,15z/data=!3m1!4b1!4m6!3m5!1s0x88121be0cf103ccd:0x63e6b066f758ded9!8m2!3d41.15067!4d-87.306073!16s%2Fg%2F1wg5yl_y?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: 'Goodland Site',
      manager: 'Sandy Burns',
      hours: 'Monday-Friday 8:15am-2:15pm',
      phone: '219-297-3039',
      location: '108 N Benton St. Goodland, IN 47948',
      mapsLink: 'https://www.google.com/maps/place/108+N+Benton+St,+Goodland,+IN+47948/@40.766088,-87.3012025,15z/data=!3m1!4b1!4m6!3m5!1s0x881268a7ef1faf31:0xf529ff9e2f70e4d3!8m2!3d40.7660885!4d-87.2909028!16s%2Fg%2F11qg0z1s49?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: 'Kentland Site',
      manager: 'Bill Bivins',
      hours: 'Monday-Friday 8:00am-2:00pm',
      phone: '219-474-6711',
      location: '2911 W 1500 S Kentland, IN 47951',
      mapsLink: 'https://www.google.com/maps/place/Kentland+Senior+Nutrition+Site/@40.7799088,-87.4493679,17z/data=!4m15!1m8!3m7!1s0x881270bb3c6f3f75:0xf50806c3681fb109!2s2911+W+1500+S,+Kentland,+IN+47951!3b1!8m2!3d40.7799088!4d-87.4471792!16s%2Fg%2F11f40npdbb!3m5!1s0x881270a0cb8ab1bd:0xd1f69c1e438db98b!8m2!3d40.7799088!4d-87.4471792!16s%2Fg%2F1tnpg0sh?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
    }
  ]
  return (
    <div className='nutrition-sites'>
        <section className='hero-img'>
          <img src='/src/assets/images/nutrition-sites-group.webp' alt='Senior Citizens Standing for a Picture'></img>
        </section>
        <section className='purpose'>
          <h1>Purpose</h1>
          <p>Sometimes food security doesn't have anything to do with finances. Sometimes proper eating has more to do with time or energy, isolation or loneliness. As we age, mobility issues can inhibit grocery shopping and cooking. Making meals for one doesn't hold the same meaning as group eating. Joining us for lunch will fill you with more than just food. We have fun, stay social, and enjoy life! The goal of our Nutrition sites are to pour into your health so you can maintain an active, independent lifestyle. Has nothing to do with finances. Any Senior Adult over 60 year old may join us. There's a site near you. Come see what we are all about. </p>
        </section>
        <section className='hungry'>
          <h1>About Our Nutrition Sites</h1>  
          <p>Seniors 60+ and disabled persons can join one of our four nutrition sites in Newton County for a hot, nutritious meal prepared by Meals on Wheels out of Merrillville, IN.  Meals are served Mon-Fri for a requested donation of $2.00 per day. If you are hungry, unable to shop, cook for yourself, or just want someone to share a meal with, you can contact one of our nutrition sites with a weeks notice to make a meal reservation. The Senior Lunch Program is <strong>based on age, NOT income.</strong></p>  
        </section>
        <section className='who'>
          <img src='/src/assets/images/CoAction-Logo.webp' alt='CoAction Logo'/>
          <h1>Who Makes this Happen?</h1>
          <p>Congregate Meal Programs are made possible by Title III OLDER AMERICAN ACT through CoAction "we care about everybody"</p>
          
        </section>
        <section className='activities'>
          <img src="/src/assets/images/activities-bingo.webp" alt="Bingo game" />
          <h1>Activities</h1>
          <p>Our Senior Centers enjoy Bunco, Bingo, cards, puzzles, dominos, WII games, educational programs, outings, holiday parties, field trips, and more! Inquire at your local site for more information.</p>
        </section>
        <section className='site-locations'>
          <h1>Find a Location Near You</h1>
          <section className='sites'>
            {siteInfo.map((site, index) => (
              <div className='site' key={index}>
                <h2>{site.name}</h2>
                <div className='site-underline'></div>
                <h3>Site Manager: {site.manager}</h3>
                <p><strong>Open: </strong>{site.hours}</p>
                <p><strong>Phone: </strong>{site.phone}</p>
                <p><strong>Location: </strong>{site.location} <a href={site.mapsLink} target='_blank'><FaMapMarkerAlt /></a></p>
              </div>
            ))}
          </section>
        </section>
        
        </div>
  )
}

export default NutritionSites