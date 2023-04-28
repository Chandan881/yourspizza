import React, { useState } from 'react'
import "./CardDetails.css";
import { NavLink, useParams } from 'react-router-dom';
import Cards from './Cards';


const CardDetails = () => {


  const {id} = useParams();
  console.log(id);

  

  return (
    <div className='carddetail'>
       <div className='single'>

          <div className='imgsingle'>
           <img className='singleimg' src="https://images.dominos.co.in/new_veggie_paradise.jpg" alt='src' />
          </div>
          <div className='forother'>
            <div className='prices'><h2>₹ 359</h2></div>
            <div className='flavourname'>PizzaMania</div>
            <div className='descr'>something is netsg kljf fj dj fedfje fdjfd dfedf fdhfd </div>
            <div className='btnsec'>
               <NavLink to={`/order`} className='btnadd'> <button>ADD TO CART</button> </NavLink>
            </div>
          </div>
       </div>
    </div>
  )
}

export default CardDetails