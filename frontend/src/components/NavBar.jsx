import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {IoIosArrowDown, IoIosArrowDropdown, IoIosArrowForward} from 'react-icons/io'

const NavBar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const navRef = useRef(null)

  function handleDropdown(setting) {
    if (dropdown != setting) {
      setDropdown(setting)
    } else {
      setDropdown(null)
    }
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDropdown(null)
      }
    }
    document.addEventListener('scroll', () => {
      setDropdown(null)
    })
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener('scroll', () => {
        setDropdown(null)
      })
    }
  }, [])

  const handleNavigation = (page, activePage) => {
    navigate(page);
    setActive(activePage);
  }
  return (
    <nav ref={navRef}>
        <ul>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <li className={active === 'about-us' ? 'active': ''} onClick={() => handleNavigation('/', 'about-us')}>About Us</li>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <li onClick={() => handleDropdown('services')}>Services<p style={{paddingLeft: '.5em', display: 'flex'}}>{dropdown === 'services' ? <IoIosArrowDown /> : <IoIosArrowForward />}</p></li>
              <div className={dropdown === 'services' ? 'dropdown-menu' : 'display-none'}>
                <li className={active === 'nutrition-sites' ? 'active': ''} onClick={() => handleNavigation('/nutrition-sites', 'nutrition-sites')}>Senior Nutrition Sites</li>
                <li className={active === 'public-transportation' ? 'active': ''} onClick={() => handleNavigation('/public-transportation', 'public-transportation')}>Public Transportation</li>
                <li className={active === 'assistance-programs' ? 'active': ''} onClick={() => handleNavigation('/assistance-programs', 'assistance-programs')}>Assistance Programs</li>
                <li className={active === 'employment-volunteering' ? 'active': ''} onClick={() => handleNavigation('/employment-volunteering', 'employment-volunteering')}>Employment & Volunteering</li>
                <li className={active === 'donations' ? 'active': ''} onClick={() => handleNavigation('/donations', 'donations')}>Donations</li>
              </div>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <li onClick={() => handleDropdown('resources')}>Resources<p style={{paddingLeft: '.5em', display: 'flex'}}>{dropdown === 'resources' ? <IoIosArrowDown /> : <IoIosArrowForward />}</p></li>
              <div className={dropdown === 'resources' ? 'dropdown-menu' : 'display-none'}>
                <li className={active === 'food-pantry' ? 'active': ''} onClick={() => handleNavigation('/food-pantry', 'food-pantry')}>Food Pantry</li>
                <li className={active === 'community-garden' ? 'active': ''} onClick={() => handleNavigation('/community-garden', 'community-garden')}>Community Garden</li>
              </div>
            </div>
            
        </ul>      
    </nav>
  )
}

export default NavBar