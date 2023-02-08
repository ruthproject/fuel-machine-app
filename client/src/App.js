import './App.css';
import {React, useEffect} from 'react';
import {useMachine} from './useMachine.js'
import GaugeChart from 'react-gauge-chart';
import car from './images/car.png';
import { getOptions } from "./api/Api";

const App=()=>{

  const {amount, changeAmount, stopFillUp, stopDriving}=useMachine();

   const drive=()=>{
      changeAmount('drive');
   }

   const fillUp=()=>{
    changeAmount('fillUp');   
 }
 
 useEffect(() => {
  getOptions().then((data) => {
    
  });
}, []);

  return (
    <>
     <GaugeChart className='gauge-chart2'
     style={{height:'200px',display: 'block',margin: '3% auto 0 auto', width: '40%'}}
         nrOfLevels={20} 
         percent={amount/100} 
        />
        <div id ='myContainer'>
        <img id='myAnimation' src={car} alt="car" width="400" height="200"/>        
        </div>
        <div className='wrapButtons'>
        <button onClick={drive}>start driving</button>
        <button onClick={stopDriving}>stop driving</button>
        <button onClick={fillUp}>start refueling</button>
        <button onClick={stopFillUp}>stop refueling</button>
        </div>
        <p className='p'>{amount ===100? 'The fuel tank is full!': amount==0 && 'The fuel tank is empty'}</p>
    </>
  );
}

export default App;
