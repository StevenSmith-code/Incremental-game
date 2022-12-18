import React from 'react'
import './Gameloop.css';
import playerAvatar from "./img/player.png"
import enemyAvatar from "./img/enemy.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarComp from './ProgressBarComp';
function Gameloop() {

  return (
    <div className='main-container'>
      <h1>Adventure</h1>
      <div className="window-container mt-5">
        <div className="playerDisplay">
          <img className='player-portrait' src={playerAvatar} width={150} height={150} alt="" />
          <p>Player</p>
          <p>Health:</p>
        </div>
        <div className="playerDisplay">
          <img className='player-portrait' src={enemyAvatar} width={150} height={150} alt="" />
          <p>Enemy Name</p>
          <p>Health:</p>
        </div>
      </div>
    </div>
  )
}

export default Gameloop