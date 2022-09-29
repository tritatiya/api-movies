import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesAsync } from '../../store/slices/moviesSlice'
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


const MovieList = () => {

    const dispatch = useDispatch()
  
    const [cartItems, setCartItems] = useState(getLocalItems())
    const searchText = useSelector((state)=>state.search)
    const movies = useSelector((state)=>state.movies.movies)
    const loading = useSelector((state)=>state.movies.loading)

    useEffect(()=>{
      
      localStorage.setItem('cart',JSON.stringify(cartItems))
    },[cartItems])

    

    useEffect(()=> {
      if (searchText){
        dispatch(fetchMoviesAsync({searchText}))
      }
      

    },[searchText])

    if(loading) return <Loader/>
    if(movies.length>0) {
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

  
}

export default MovieList