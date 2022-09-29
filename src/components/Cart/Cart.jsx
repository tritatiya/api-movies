import React, { useEffect } from 'react'
import { useState } from 'react'
import Payment from '../Payment/Payment'
import './Cart.css'

const getLocalItems = ()=> {
    const list = localStorage.getItem('cart')
    if(list){
      return JSON.parse(localStorage.getItem('cart'))
    } else {
      return []
    }
  }

const Cart = () => {
    const [cartList, setCartList] = useState(getLocalItems())

    const [popup, setPopup] = useState(false)
    const removeItem = (index)=>{
        setCartList(cartList.filter((item, id)=> index!==id))
    }
    const clearItems = ()=>{
        setCartList([])
    }

    const sumPrice = ()=> {
        let sum =0
        for(let i=0; i<cartList.length; i++){
            sum += cartList[i].price
        }
        if(cartList.length>=3 && cartList.length<5){
            const discount = 10/100*sum
            sum -= discount
        }
        if(cartList.length>=5){
            const discount = 20/100*sum
            sum -= discount
        }
        return sum
    }

    useEffect(()=>{
      
        localStorage.setItem('cart',JSON.stringify(cartList))
      },[cartList])

  return (
    <div className='cart-container'>
        <div className="cart-header">
            <div className='cart-header-title'>
                Shopping Movies
            </div> 
            <div className="cart-header-remove" onClick={clearItems}>
                Clear Movies
            </div>
        </div>
        <div className="cart-list">
            {cartList.map((item, index)=>(
                 <div className="cart-item">
                 <div className="cart-item-title-box">
                     <img src={item.poster} alt="" />
                     <div className="cart-item-title">
                         {item.title}
                     </div>
                 </div>
                 <div className="cart-item-price">
                     {item.price} Baht
                     <div className="cart-item-remove" onClick={()=>removeItem(index)}>
                     remove
                 </div>
             </div> 
            </div>
            ))}
        </div>
        <div className="cart-sum">
            <div className="sum-price">
                Total{
                cartList.length >= 3 
                    ? cartList.length>=5 
                        ? '(Discount 20%)' 
                        : '(Discount 10%)' 
                    : null} 
                
                
                : {sumPrice()}
            </div>
            <button className="checkout" onClick={()=>setPopup(true)}>Check Out</button>
        </div>
        {popup? <Payment popup={popup} setPopup={setPopup} />: null}
    </div>
  )
}

export default Cart