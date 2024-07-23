import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react'

import  {currency_list} from './Test'


export default function Currency({dark,toogle}) {
    
      const [currentNumber, setCurrentNumber] = useState('0')
  const curclicked = (num) => {
    setCurrentNumber(prev => (prev === '0' ? String(num) : prev + num));

  };
  const deleteNum = () => {
    setCurrentNumber(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };
  const clear = () => {
    setCurrentNumber('0');
    setexchangerate('0');}
      
      const [selectedCurrency, setSelectedCurrency] = useState('USD');
      const [toCurrency, settoCurrency] = useState('USD');
      const[ exchangerate,setexchangerate]=useState('0')
  
  const handleFromChange = (event) => {
    setSelectedCurrency(event.target.value);
      
  }
  const handleToChange = (event) => {
    settoCurrency(event.target.value);
    
  };


  const handleDecimal = () => {
    setCurrentNumber(prev => 
      prev.includes('.') ? prev : prev + '.'
    );
  };


  async function fetchexchanerate(){
    const response= await fetch(`https://v6.exchangerate-api.com/v6/d8b18f6236e733644b75fdae/pair/${selectedCurrency}/${toCurrency}`)
    const a=await response.json()
  const val = parseFloat(a.conversion_rate *currentNumber).toFixed(5);
  setexchangerate(val);
  }

  

  return (
    <div className='d-flex justify-content-center align-items-center '  style={{ height: '100vh' }}>
    <div className="d-flex justify-content-end " style={{backgroundColor:dark.backgroundColor, height: '90vh',width:'50vh',boxShadow: '30px 30px 30px ',border:'5px solid #504f4f',borderRadius:'20px',overflow:'hiden',position:'relative'}}>
   
   <div className='position-absolute d-flex' style={{top: '3%',
          left: '20%',
          transform: 'translate(-50%, -50%)',alignItems:'center',justifyContent:'center',fontSize:'30px',color:dark.color}}>
            <Link className="nav-link" to="/"> <FontAwesomeIcon icon={faCalculator} /></Link>

   </div>
   <div className='position-absolute d-flex' style={{top: '3%',
          left: '80%',
          transform: 'translate(-50%, -50%)',alignItems:'center',justifyContent:'center',fontSize:'30px',color:dark.color}}><Link className="nav-link" to="/dollar"> <FontAwesomeIcon icon={faDollarSign} /></Link>
   
   </div>

    <div
        className="position-absolute container text-center"
        style={{
          backgroundColor: dark.color,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '45vh',
          height: '1px',
          borderRadius: '5px',
        }}
        
      >
        
        <div
          className=" position-absolute container grid-container"
          style={{ width:'35vh',height:'45vh',fontSize: '30px', color: dark.color, cursor: 'pointer' ,top: '50%',
            left: '35%',
            transform: 'translate(-47%, 5%)'}}
        >
        <div className="row my-4">
            <div className="col-4 grid-item  " onClick={()=> curclicked(7)}>7</div>
            <div className="col-4 grid-item  " onClick={()=> curclicked(8)}>8</div>
            <div className="col-4 grid-item  " onClick={()=> curclicked(9)} >9</div>
        </div>
        
          <div className="row my-4">
            <div className="col-4 grid-item  " onClick={()=> curclicked(4)}  >4</div>
            <div className="col-4 grid-item  " onClick={()=> curclicked(5)}  >5</div>
            <div className="col-4 grid-item  " onClick={()=> curclicked(6)} >6</div>
         
          </div>
          <div className="row my-4">
            <div className="col-4 grid-item  " onClick={()=> curclicked(1)}  >1</div>
            <div className="col-4 grid-item  " onClick={()=> curclicked(2)} >2</div>
            <div className="col-4 grid-item  " onClick={()=> curclicked(3)} >3</div>
           
          </div>
          <div className="row my-4">
            <div className="col-4 grid-item  " onClick={()=> curclicked()}  ></div>
            <div className="col-4 grid-item  " onClick={()=> curclicked(0)} >0</div>
            <div className="col-4 grid-item  " onClick={handleDecimal} >.</div>
           
          </div>
          </div></div>
          <div className="position-absolute mx-3 "   style={{color: dark.color,backgroundColor:'',display:'flex',alignItems:'center',justifyContent:'center', fontSize:'25px',width:'60px',height:'80px',border:'2px solid',borderColor:dark.color,top: '90%',
          left: '83%',
          transform: 'translate(-50%, -50%)',borderRadius:'30px',cursor: 'pointer'}} onClick={fetchexchanerate} >=</div>


        <div className="position-absolute mx-3"   style={{color: dark.color,backgroundColor:'',display:'flex',alignItems:'center',justifyContent:'center', fontSize:'25px',width:'60px',height:'80px',border:'2px solid',borderColor:dark.color,top: '75%',
          left: '83%',
          transform: 'translate(-50%, -50%)',borderRadius:'30px',cursor: 'pointer'}} onClick={deleteNum} >x</div>




          <div className="position-absolute mx-3 "   style={{color: dark.color,backgroundColor:dark.backgroundColor,display:'flex',alignItems:'center',justifyContent:'center', fontSize:'25px',width:'60px',height:'80px',border:`2px solid `,borderColor:dark.color,top: '60%',
          left: '83%',
          transform: 'translate(-50%, -50%)',borderRadius:'30px',cursor: 'pointer'}} onClick={clear} >AC</div>




          
          <div className =" from dropdown select-container position-absolute" style={{top: '16%',
          left: '35%',
          transform: 'translate(-50%, -50%)',borderRadius:'30px',fontSize:'15px '}} > <select
          value={selectedCurrency}
          onChange={handleFromChange}
          style={{backgroundColor:dark.backgroundColor,color: dark.color,
            borderRadius: '5px',
            fontSize: '15px',
            pading: '5px',
            width: '100%',
            border: 'none',
            background: 'transparent',
            appearance: 'none',
          }}
        >
          {currency_list.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}({currency.code})
            </option>
          ))}
        </select> </div>



          <div className ="position-absolute to" style={{top: '36%',
          left: '35%',
          transform: 'translate(-50%, -50%)',borderRadius:'30px',fontSize:'15px'}} ><select
          value={toCurrency}
          onChange={handleToChange}
          style={{backgroundColor:dark.backgroundColor,color: dark.color,
            borderRadius: '5px',
            fontSize: '15px',
            pading: '5px',
            width: '100%',
            border: 'none',
            background: 'transparent',
            appearance: 'none',
          }}
        >
          {currency_list.map((tcurrency) => (
            <option key={tcurrency.code} value={tcurrency.code}>
              {tcurrency.name}({tcurrency.code})
            </option>
          ))}
        </select> </div>


          <div className ="position-absolute" style={{color: dark.color,top: '16%',
          left: '80%',
          transform: 'translate(-50%, -50%)',borderRadius:'30px',fontSize:'20px'}} >{currentNumber}</div>
          <div className ="position-absolute" style={{color: dark.color,top: '36%',
          left: '80%',
          transform: 'translate(-50%, -50%)',borderRadius:'30px',fontSize:'20px'}} >{exchangerate}</div>
          
        </div>
        
   </div> 
  )
}
