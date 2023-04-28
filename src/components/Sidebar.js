import React from 'react';
import "./Sidebar.css";
import { FaTwitter, FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'><img className='logoimg' src='https://th.bing.com/th/id/OIP.WbaGfUaACoFqHfPkM3wkIgHaBz?pid=ImgDet&rs=1' alt='logo' /></div>
      <ul>
       <li>Pizza</li>
       <li>Slices</li>
       <li>Desserts</li>
       <li>Soft Drinks</li>
       <li>Starters</li>
      </ul>
      <div className='icns'>
       <FaTwitter />
       <FaFacebookSquare />
       <FaInstagramSquare />
       <FaLinkedinIn />
      </div>
      <div className='contact'>contact us</div>
    </div>
  )
}

export default Sidebar