import React from 'react'
import './Payment.css'
import qrcode from "../../assets/qrcode.png";
import { useState } from 'react';
import { useEffect } from 'react';

const Payment = ({ setPopup }) => {
    const [countdown, setCountDown] = useState(60)
    
    useEffect(()=>{

        if(countdown>0){
            setTimeout(()=>setCountDown(countdown-1), 1000)
        }else{
            setCountDown('QR CODE EXPIRED')
        }

    }, [countdown])
  return (
    <div className='payment-container'>
        <div className="esc" onClick={()=>setPopup(false)}>X</div>
        <img src={qrcode} alt="" />
        <div className="payment-countdown">
            {countdown}
        </div>
    </div>
  )
}

export default Payment