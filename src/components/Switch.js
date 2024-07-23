import React from 'react'


export default function Switch({dark,toogle}) {
  return (
   
       <div className="form-check form-switch position-absolute" style={{left:'70%',top:'2%',fontSize:'20px'}} >
  <input className="d-flex form-check-input mx-2 justify-content-end" onClick={toogle}  type="checkbox" style ={{border:'1px solid grey',}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="text-rgb(214 214 214)" style ={{color:'black',fontSize:'20px'}} htmlFor="flexSwitchCheckDefault">{dark.text}</label></div>

   
  )
}
