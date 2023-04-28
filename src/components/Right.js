import React from 'react';
import "./Right.css"
import Mid from './Mid';

const Right = () => {
  return (
    <div className='scrll'>
    <div className='right'>
       <h2 className='hed1'>DELIVERY TO THE </h2>
       <h2 className='hed2'>DOORSTEP</h2>
       <input type='text' className='inpt' placeholder='Search Location'/>
       <button className='search'>SEARCH</button>
       <p className='dip'>Search Delivery Location...</p>
    </div>
    <Mid />
    </div>
  )
}

export default Right