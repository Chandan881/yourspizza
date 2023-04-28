import './App.css';
import React from 'react';
import  {Routes,Route} from "react-router-dom";
import All from './components/All';
import CardDetails from './components/CardDetails';
import Order from './components/Order';
import Navig from './components/Navig';


function App() {
  return (
    <React.Fragment>
    <Routes>
    <Route path='/' element={<All />} />
    <Route path='/cart/:id' element={<CardDetails/>} />
    <Route path='/order' element={<Order />} />
    <Route path='/placed' element={<Navig />} />
    </Routes> 
    </React.Fragment>
  );
}

export default App;
