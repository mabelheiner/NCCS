import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {IoIosArrowDown, IoIosArrowDropdown, IoIosArrowForward} from 'react-icons/io'

const NavBar = () => {
  const [dropdown, setDropdown] = useState(null)
  const navigate = useNavigate();

  function handleDropdown(setting) {
    if (dropdown != setting) {
      setDropdown(setting)
    } else {
      setDropdown(null)
    }
  }
  return (
    <nav>
        <ul>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <li onClick={() => navigate('/')}>About Us</li>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <li onClick={() => handleDropdown('services')}>Services<p style={{paddingLeft: '.5em', display: 'flex'}}>{dropdown === 'services' ? <IoIosArrowDown /> : <IoIosArrowForward />}</p></li>
              <div className={dropdown === 'services' ? 'dropdown-menu' : 'display-none'}>
                <li onClick={() => navigate('/nutrition-sites')}>Senior Nutrition Sites</li>
                <li onClick={() => navigate('/public-transportation')}>Public Transportation</li>
                <li onClick={() => navigate('/assistance-programs')}>Assistance Programs</li>
                <li onClick={() => navigate('/employment-volunteering')}>Employment & Volunteering</li>
                <li onClick={() => navigate('/donations')}>Donations</li>
              </div>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <li onClick={() => handleDropdown('resources')}>Resources<p style={{paddingLeft: '.5em', display: 'flex'}}>{dropdown === 'resources' ? <IoIosArrowDown /> : <IoIosArrowForward />}</p></li>
              <div className={dropdown === 'resources' ? 'dropdown-menu' : 'display-none'}>
                <li onClick={() => navigate('/food-pantry')}>Food Pantry</li>
                <li onClick={() => navigate('/community-garden')}>Community Garden</li>
              </div>
            </div>
            
        </ul>      
    </nav>
  )
}

export default NavBar