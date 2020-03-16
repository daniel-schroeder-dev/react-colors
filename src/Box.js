import React from 'react';
import './Box.css';

function Box(props) {
  return <div className="box" style={props.backgroundColor}></div>
}

export default Box;