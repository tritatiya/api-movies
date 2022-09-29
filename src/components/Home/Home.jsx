import React from 'react'
import MovieList from '../MovieList/MovieList'
import SearchForm from '../SearchForm/SearchForm'
import './Home.css'


const Home = () => {
    
  return (
    <main>
        <SearchForm />
        <MovieList />
    </main>
  )
}

export default Home