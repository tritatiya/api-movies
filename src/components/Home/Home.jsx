import React from 'react'
import MovieList from '../MovieList/MovieList'
import SearchForm from '../SearchForm/SearchForm'
import './Home.css'
import { useState } from 'react'

const Home = () => {
    
  return (
    <main>
        
        <SearchForm />
        <MovieList />
    </main>
  )
}

export default Home