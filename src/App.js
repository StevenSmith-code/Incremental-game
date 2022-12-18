
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect, useRef} from 'react';
import Gameloop from './Gameloop';
import Energy from './Energy';

function App() {

  const [playerHealth, setPlayerHealth] = useState({
    currentHealth: 100,
    healthMultiplier: 1,
  })
  const [enemyHealth, setEnemyHealth] = useState({
    currentHealth: 100,
    healthMultiplier: 1,
  })


  return (
    <div className="App">
      <Energy/>

      <div className='fixed ml-72'>
        <Gameloop/>
      </div>
    </div>
  );
}

export default App;
