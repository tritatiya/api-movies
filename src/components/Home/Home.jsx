import React from 'react'
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import './Home.css'
import { useState } from 'react'

const Home = () => {
    
    const [searchText, setSearchText] = useState('');
  return (
    <main>
        
        <SearchForm searchText={searchText} 
                    setSearchText={setSearchText}/>
        <MovieList searchText={searchText}/>
    </main>
  )
}

export default Home