import React from 'react'
import ReactDOM from 'react-dom'

setInterval(function(){
  ReactDOM.render(
    <h>Time is Now: {new Date().toLocaleTimeString()}</h>,
      document.getElementById('root')
    );
  },1000);
