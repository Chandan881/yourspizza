import React from 'react';
import "./Order.css";
import { useNavigate } from 'react-router-dom'

const Order = () => {

  const navigates = useNavigate();

  function handleToPlace() {
    navigates('/placed');
  }


  return (
   <div className="order">
     <div className='frm'>
        <div className='frmup'>
           <h2>WELCOME TO ITALIAN PIZZA !</h2>
           <p>We deliver with in just 40 minutes...</p>
        </div> 
        <div className='frmin' >
          <label>Email</label>
          <input type='text' />

          <label>Phone</label>
          <input type='number' />

          <label>Number of slices</label>
          <input type='number' />

          <label className='size'>Size</label>
          <div className='radio'>
            <input type="radio"  name="fav_" value="8 inchs" /> <label for="size">8 inchs</label>
            <input type="radio"  name="fav_" value="10 inchs" /> <label for="size">10 inchs</label>
            <input type="radio"  name="fav_" value="12 inchs" /> <label for="size">12 inchs</label>
            <input type="radio"  name="fav_" value="14 inchs" /> <label for="size">14 inchs</label>
          </div>

          <label className='toppins'>Toppins</label>
          <div className='check'>
          <input type="checkbox" id="veh1" name="veh1" value="Toppins" /> <label for="veh1">Periperri</label>
          <input type="checkbox" id="veh2" name="veh2" value="Toppins" /> <label for="veh1">Onion</label>
          <input type="checkbox" id="veh3" name="veh3" value="Toppins" /> <label for="veh1">Mashrooms</label>
          <input type="checkbox" id="veh4" name="veh4" value="Toppins" /> <label for="veh1">Sausage</label>
          </div>

          <div className='condition'>
          <input type='checkbox' /> <label>I agree to the THE & CONDITIONS</label>
          </div>
        </div>
        <button className='orderbtn' onClick={handleToPlace} >Order Now</button>
     </div>
   </div>
  )
}

export default Order
