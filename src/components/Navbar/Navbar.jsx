import React from 'react'
import './Navbar.css'
import logoImg from '../../assets/logo.jpg'
import { BsFillCartFill } from "react-icons/bs";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const[toggleMenu, setToggleMenu] = useState(false)
    const handleNavbar = ()=> setToggleMenu(!toggleMenu)
    const navigate = useNavigate()

  return (
    <nav className="navbar">
        <div className="container navbar-content flex">
            <div className="brand-and-toggler flex flex-sb"   
                 onClick={()=>navigate('/')}>
                    <img src={logoImg} alt="logo-img" />
                      
            </div>
        </div>    
        <div className="cart-btn" onClick={()=>navigate('/cart')}>
            <BsFillCartFill size={25}/>
        </div> 
    </nav>
  )
}

export default Navbar