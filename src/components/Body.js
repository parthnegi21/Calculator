import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import React from 'react'

import Number from './Number'
export default function Body  ({dark,toogle})  {






  return (
    <div className='d-flex justify-content-center align-items-center '  style={{ height: '100vh' }}>
    <div className="d-flex justify-content-end " style={{backgroundColor:dark.backgroundColor, height: '90vh',width:'50vh',boxShadow: '30px 30px 30px ',border:'5px solid #504f4f',borderRadius:'20px',overflow:'hidden',position:'relative'}}>
   
   
<div className='position-absolute d-flex' style={{top: '3%',
          left: '20%',
          transform: 'translate(-50%, -50%)',alignItems:'center',justifyContent:'center',fontSize:'30px',color:dark.color}}>
<FontAwesomeIcon icon={faCalculator} />
   </div>
   <div className='position-absolute d-flex' style={{top: '3%',
          left: '80%',
          transform: 'translate(-50%, -50%)',alignItems:'center',justifyContent:'center',fontSize:'30px',color:dark.color}}><Link className="nav-link" to="/dollar"> <FontAwesomeIcon icon={faDollarSign} /></Link>
   
   </div>

   
  
  
  
  <Number dark={dark}/>
</div></div>

       
     
    
   
  )
}


