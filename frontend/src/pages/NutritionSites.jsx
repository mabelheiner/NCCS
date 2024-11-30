import React from 'react'
import Header from '../components/Header'

const NutritionSites = () => {
  return (
    <div className='nutrition-sites'>
        <Header />
        <section className='hero-img'>
          <img src='/src/assets/images/nutrition-sites-group.webp' alt='Senior Citizens Standing for a Picture'></img>
        </section>
        <section className='hungry'>
          <h1>Are you hungry?</h1>  
          <p>Seniors 60+ and disabled persons can join one of our four nutrition sites in Newton County for a hot, nutritious meal prepared by Meals on Wheels out of Merrillville, IN.  Meals are served Mon-Fri for a requested donation of $2.00 per day. If you are hungry, unable to shop, cook for yourself, or just want someone to share a meal with, you can contact one of our nutrition sites with a weeks notice to make a meal reservation. The Senior Lunch Program is <strong>based on age, NOT income.</strong></p>  
        </section>
        <section className='where-to-go'>
          <div className='site'>
            <h2>Morocco Site</h2>
            <h3>Site Manager: Pat Wynn</h3>
            <p>Open: Monday-Friday 8:00am-1:30pm</p>
            <p>Phone: 219-285-2246</p>
            <p>Location: 102 E State St. Morocco, IN 47963</p>
          </div>
        </section>
        </div>
  )
}

export default NutritionSites