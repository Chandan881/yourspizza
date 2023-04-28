import '../App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Right from './Right';


const All = () => {
  return (
    <div className="App">
      <div className="left"><Sidebar /></div>
      <div className="right"><Right /></div>
    </div>
  )
}

export default All