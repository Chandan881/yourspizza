import React from 'react'
import "./Navig.css"
import { useNavigate } from 'react-router-dom'

const Navig = () => {

  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/');
  }

  return (
    <React.Fragment>
    <div className='navig'>
      <h2>Out For Delivery !</h2>
       <div className='inner'>
          <img className='navigimg' src='https://the-ken.com/wp-content/uploads/2022/02/Pizza-Hut-lede-1.gif' alt='navig' />
       </div>    
       <button className='btnmenu' onClick={handleNavigate} >Back To Menu</button>
    </div>   
    
    </React.Fragment>
  )
}

export default Navig