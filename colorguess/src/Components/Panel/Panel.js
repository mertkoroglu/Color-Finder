import React from 'react'
import "./Panel.css";

const Panel = (props) => {
  return (
        <div className='panel' style={{backgroundColor: `${props.color}` }}></div>
  )
}

export default Panel