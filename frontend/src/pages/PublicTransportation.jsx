import React from 'react'
import Header from '../components/Header'

const PublicTransportation = () => {
  return (
    <div className='public-transportation'>
        <section className='hero-img'>
          <img src="/src/assets/images/transportation-logo.webp" alt="Newton County Public Transit" />
        </section>
        <section>
          <h1>Our Mission</h1>
          <p>Mission Statement: It is our mission to provide safe, reliable, affordable and efficient public transportation in Newton County.</p>
        </section>
        <section>
          <h1>How We Complete It</h1>
          <p>Newton County Community Services' Public Transportation provides demand response, curb-to-curb public transportation service originating from Newton County. Out of county Transportation will be considered based on availability within 120 miles of Newton County between the hours of 8am-4pm Monday through Friday. Before and after hour transportation will be considered based on drivers availability. Out of state trips are not permitted. We have low fares that have not been increased, accept some insurance or have grant funding. All of our Public Transportation Services operates as a shared-ride service so it is common that passengers will be on board the vehicle with others who are traveling at the same time and in the same direction.</p>
        </section>
    </div>
  )
}

export default PublicTransportation