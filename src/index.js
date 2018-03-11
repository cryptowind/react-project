import React from 'react'
import ReactDOM from 'react-dom'

function Cartoon(props){
  return <h>Hello, {props.name} you are wellcome on {props.show}</h>
}
function Show(){
  return<div>
      <h1><Cartoon name='Rowan atkinson' show='Mr. Bean'/></h1>

      <h2><Cartoon name='Amir Khan' show='Dhoom'/></h2>
  </div>
}
  ReactDOM.render(
    <Show/>,
      document.getElementById('root')
    );
