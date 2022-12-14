
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarComp from './ProgressBarComp';
import React, {useState, useEffect, useRef} from 'react';
import Gameloop from './Gameloop';

function App() {

  const [increment, setIncrement] = useState(0)
  const [energy, setEnergy] = useState(0)
  const [totalEnergy, setTotalEnergy] = useState(0)
  const [energyCap, setEnergyCap] = useState(50)
  const [energySpeed, setEnergySpeed] = useState(10)
  const [energyBars, setEnergyBars] = useState(1)
  const [spentEnergy, setSpentEnergy] = useState(0)
  const [playerHealth, setPlayerHealth] = useState(100)
  const [enemyHealth, setEnemyHealth] = useState(1)

  const intervalRef = useRef(null)

  useEffect(() => {

    let interval = null


     interval = setInterval(() => {
      setIncrement(prev => {
        const newValue = prev + 1

        if(newValue === 100){
          setTotalEnergy(prev => prev + 1)
          setEnergy(prev => prev + 1)
          setIncrement(0)
        }

        


        return newValue


        
      })
      
      if(totalEnergy === energyCap){
        clearInterval(intervalRef.current)
      }


    }, 50);
    intervalRef.current = interval

    return () => {
      // Clear the interval
      clearInterval(intervalRef.current)
    }

  }, [totalEnergy, energyCap]);


  const spendEnergy =() =>{
    if(energy <4 ){
      alert("gain more energy")
    }
   else{
     setEnergy(prev => prev - 4)
     setSpentEnergy(prev => prev + 4)

   }
  }

  return (
    <div className="App">
      <div className='bar-container'>

        <p>{energy} Energy</p>
        <ProgressBarComp value={increment} variant="success" />
        <p>Energy Cap: {energyCap}</p>
        <button className='spend-btn' onClick={spendEnergy}>Spend Energy</button>       
      </div>

      <div>
        <Gameloop/>
      </div>
    </div>
  );
}

export default App;
