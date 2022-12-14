import ProgressBar from 'react-bootstrap/ProgressBar'

import React from 'react'

function ProgressBarComp({value, variant}) {
  return (
    <ProgressBar now={value} max={100} variant={variant}/>
  )
}

export default ProgressBarComp