import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'

const Header = () => {
  return (
    <div>
        <header className='header'>
            <Navbar/>
        </header>
    </div>
  )
}

export default Header