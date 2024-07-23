
import './App.css';
import Body from './components/Body';
import Currency from './components/Currency';
import { BrowserRouter as Router, Routes, Route,   } from 'react-router-dom';
import Switch from './components/Switch';
import React, { useState } from 'react'




function App() {
  const[dark,setdark]=useState({
    color:'#202020',
    backgroundColor:'rgb(226 226 226)',
    text:'Dark Mode'
  })
  const toogle=()=>{
  if(dark.color==='#202020'){
  setdark({
    color:'rgb(226 226 226)',
    backgroundColor:'#202020',
    text:'Light Mode'
  })
  }
  else{
    setdark({
      color:'#202020',
      backgroundColor:'rgb(226 226 226)',
      text:'Dark Mode'
    })
   
  }
  }
  return (
    <Router>
    <Switch dark={dark} toogle={toogle}/>
    <Routes>
    <Route exact path="/" element={<Body  dark={dark} toogle={toogle}/>}></Route>
      <Route exact path="/dollar" element={<Currency  dark={dark} toogle={toogle}/>}></Route>
    </Routes>
    </Router>
    

   
  )
}

export default App;
