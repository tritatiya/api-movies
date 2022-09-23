import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import Movie from './Movie'
import './MovieList.css'

const getLocalItems = ()=> {
  const list = localStorage.getItem('cart')
  if(list){
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}


const MovieList = ({searchText}) => {

    const [movies, setMovies] = useState([])
    // const [loading, setLoading] = useState(false)
    const [cartItems, setCartItems] = useState(getLocalItems())

    useEffect(()=>{
      
      localStorage.setItem('cart',JSON.stringify(cartItems))
    },[cartItems])

    useEffect(()=> {
      const fetchData = async()=>{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cf526ff11604bcb9e384182044651d7e&query=${searchText}`)
        const data = await response.json();
        
        if(data.results){
          const newMovies = data.results.slice(0,20).map((movie) =>{
            return{
              id:movie.id,
              title:movie.title,
              poster:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              price: 50 
            }
          })
          setMovies(newMovies)
        }
      }
      fetchData()
    },[searchText])

  return (
    <section className="movielist">
      <div className="container">
        <div className="section-title">
          <h2>result</h2>
        </div>
        <div className="movielist-content grid">
            {movies.map((item, index)=>(
              <Movie 
              setCartItems={setCartItems}
              cartItems={cartItems}
              key={index}
              id={item.id}
              title={item.title}
              poster={item.poster}
              price={item.price}
              
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default MovieList