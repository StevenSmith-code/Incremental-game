import React from 'react'
import './Gameloop.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBarComp from './ProgressBarComp';
function Gameloop() {
  return (
    <div className='main-container'>
      <h1>Adventure</h1>
      <div className="window-container">
        <div className="playerDisplay">
          <img className='player-portrait' src={"https://openailabsprodscus.blob.core.windows.net/private/user-YvWmZJFiYNDifQrehYNjuHPY/generations/generation-qE2vxGJDzACpHikIWpR3Dc8D/image.webp?st=2022-12-14T19%3A42%3A51Z&se=2022-12-14T21%3A40%3A51Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-14T19%3A14%3A59Z&ske=2022-12-21T19%3A14%3A59Z&sks=b&skv=2021-08-06&sig=4KGccbFZgdkpyoaMNPkxLyzc6dkjpyxStbfZ8YxMJDg%3D"} width={150} height={150} alt="" />
          <p>Player</p>
          <p>Health:</p>
        </div>
        <div className="playerDisplay">
          <img className='player-portrait' src={"https://openailabsprodscus.blob.core.windows.net/private/user-YvWmZJFiYNDifQrehYNjuHPY/generations/generation-zu3DSyLKrcF8UP5ABAEagvky/image.webp?st=2022-12-14T20%3A09%3A49Z&se=2022-12-14T22%3A07%3A49Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/webp&skoid=15f0b47b-a152-4599-9e98-9cb4a58269f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-14T18%3A54%3A58Z&ske=2022-12-21T18%3A54%3A58Z&sks=b&skv=2021-08-06&sig=cip//mCzaytTB0ncbt3sbhexbdB8%2BIQLBYqLm5vtABY%3D"} width={150} height={150} alt="" />
          <p>Enemy Name</p>
          <p>Health:</p>
        </div>
      </div>
    </div>
  )
}

export default Gameloop