import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

const FoodPantry = () => {
  document.title = "NCCS | Food Pantry";
  return (
    <div>
        <Header />
        <h1>Food Pantry</h1>
    </div>
  )
}

export default FoodPantry