import React from 'react'
import './Nav.css';
import Logo from '../../images/Logo.png';
import About from '../../images/About.png';
import Movie from '../../images/Movie.png';
import Series from '../../images/Series.png';



const NavBar = () => {
  return (
    <div className='back'>
    <div className='navbar'>
       <img className="Logo" src={Logo} alt=""/>
<img src={Movie} alt=""/>
<img src={Series} alt=""/>
<img src={About} alt=""/>
    </div>
</div>
  )
}

export default NavBar