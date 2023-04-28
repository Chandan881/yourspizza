import React, {  useState } from 'react';
import "./Mid.css";
import Cards from './Cards';
import { NavLink } from 'react-router-dom';


const Mid = () => {

  const [data, setData] = useState(Cards)
  console.log(data)

  return (
    <div className='mid'>
       
         
          {
            data.map((item,id) => {
                return(
                 
                    <div className='card'>
                    <div className='img'> <NavLink to={`/cart/${item.id}`} ><img className='imgin' src={item.imgdata} alt={item.id} /> </NavLink> </div>
                    <div className='flavor'>{item.rname}</div>
                    <div className='des'>{item.description}</div>
                    <div className='price'>₹ {item.price}</div>
                    <div className='ratings'><button>ADD TO CART</button></div>
                    </div>
                 
                )
            })
          }
      
    </div>
  )
}

export default Mid