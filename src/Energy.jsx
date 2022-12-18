import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarComp from './ProgressBarComp';
import { useEffect } from 'react';
function Energy() {

  const [energy, setEnergy] = useState({
    currentEnergy: 1,
    accumulativeEnergy: 1,
    energyCap: 100,
    energySpeed: 1,
    energyMultiplier: 1,
  })

  const shop =[]
  const buttons =[]

  const format = amount =>{
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if(power < 3) return amount.toFixed(2)
    return mantissa.toFixed(2) + "e" + power
  }


  for (let i = 0; i < 10; i++) {
  let generator = {
    cost: Math.pow(10, i) + 20,
    bought: 0,
    multi: (i + 1) * 1.05
  }   
  shop.push(generator) 
  }

  for (let i = 0; i < 10; i++) {
   let g = shop[i]
   buttons.push(<div key={i} className={"border-2 cursor-pointer"}>
    <p>Energy Increase {i + 1}</p>
    <p>Cost: {format(g.cost)}</p>
    <p>Bought: {format(g.bought)}</p>
    <p>Multi: {format(g.multi)}</p>
   </div>)
    
  }



  const energyGenerator = () =>{

    if(energy.accumulativeEnergy === energy.energyCap) return

    setEnergy(prev => ({...prev,
    
    currentEnergy: prev.currentEnergy += energy.energySpeed * energy.energyMultiplier,
    accumulativeEnergy: prev.accumulativeEnergy += energy.energySpeed * energy.energyMultiplier,
    
    }))
  }



  useEffect(() => {
    const interval = setInterval(energyGenerator, 100)
    return () => clearInterval(interval)
  })
  

  
   



  return (
    <div className='w-auto h-auto border-r-2 p-4'>

        <p>{energy.currentEnergy} Energy</p>
        <ProgressBarComp value={energy.currentEnergy} variant="success" />
        <p>Energy Cap: {energy.energyCap}</p>
        {buttons}    
      </div>
  )
}

export default Energy