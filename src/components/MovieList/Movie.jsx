import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'


const Movie = ({title,poster, id, price,setCartItems, cartItems }) => {
    const addToCart = ()=> {
        setCartItems([...cartItems, {title, poster,price,id}])
    }
  return (
      <div className="movie-item flex flex-column flex-sb">
          <div className="movie-item-img">
              <img src={poster} alt="cover" />
          </div>
          <div className="movie-item-info text-center">
              
                  <div className="movie-item-info-item title fw-7 fs-18">
                      <span>{title}</span>
                  </div>
               

              <div className="movie-item-info-item author fs-15">
                  <span className="text-capitalize fw-7">Price: </span>
                  <span>{price} Baht</span>
              </div>
              <button className="add-cart-btn" onClick={addToCart} >
                ADD TO CART
              </button>
          </div>
    </div>
  )
}

export default Movie