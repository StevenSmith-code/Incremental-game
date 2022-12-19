import React, { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';
function Energy() {

  const [energy, setEnergy] = useState({
    currentEnergy: 1,
    energySpeed: 1,
    energyMultiplier: 1,
  })

  const [shop, setShop] = useState([]);
  const buttons =[]

  const format = amount =>{
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if(power < 3) return amount.toFixed(2)
    return mantissa.toFixed(2) + "e" + power
  }


  const energyGenerator = () =>{
    

    setEnergy(prev => ({...prev,
    
    currentEnergy: Math.floor(prev.currentEnergy + shop[0].amount * shop[0].multi),
    
    }))
  }

  const buyGenerator = i =>{
    let g = shop[i]
    if(g.cost > energy.currentEnergy) return
    energy.currentEnergy -= g.cost
    g.amount += 1
    g.bought += 1
    g.multi *= 1.05
    g.cost *= 1.5

    setEnergy(prev => ({...prev,
    
    energySpeed:prev.energySpeed *= g.multi
    }))

    setShop([...shop])

  }


  for (let i = 0; i < 10; i++) {
  let generator = {
    cost: Math.pow(Math.pow(10,i), i),
    bought: 0,
    amount: 0,
    multi: 1
  }   
  shop.push(generator) 
  }

  for (let i = 0; i < 10; i++) {
   let g = shop[i]
   buttons.push(<div key={i} className={"border-2 cursor-pointer select-none "} onClick={()=> buyGenerator(i)}>
    <p>Energy Increase {i + 1}</p>
    <p>Amount: {format(g.amount)}</p>
    <p>Cost: {format(g.cost)}</p>
    <p>Bought: {format(g.bought)}</p>
    <p>Multi: {format(g.multi)}</p>
   </div>)
    
  }



  useEffect(() => {
    const interval = setInterval(energyGenerator, 100)
    return () => clearInterval(interval)
  })
  

  
   



  return (
    <div className='w-auto h-auto border-r-2 p-4'>

        <p>{energy.currentEnergy} Energy</p>
        {buttons}    
      </div>
  )
}

export default Energy