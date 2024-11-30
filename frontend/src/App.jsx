import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import './App.css'

import '@styles/App.scss'

import Home from './pages/Home'
import PublicTransportation from './pages/PublicTransportation'
import AssistancePrograms from './pages/AssistancePrograms'
import FoodPantry from './pages/FoodPantry'
import NutritionSites from './pages/NutritionSites'
import CommunityGarden from './pages/CommunityGarden'
import EmploymentVolunteering from './pages/EmploymentVolunteering'
import Donations from './pages/Donations'

function App() {

  useEffect(() => {
    document.title = "Newton County Community Services"
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/public-transportation' element={<PublicTransportation />} />
        <Route path='/assistance-programs' element={<AssistancePrograms />} />
        <Route path='/food-pantry' element={<FoodPantry />} />
        <Route path='/nutrition-sites' element={<NutritionSites />} />
        <Route path='/community-garden' element={<CommunityGarden />} />
        <Route path='/employment-volunteering' element={<EmploymentVolunteering />} />
        <Route path='/donations' element={<Donations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
