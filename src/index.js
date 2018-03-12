import React from 'react'
import ReactDOM from 'react-dom'

const cartoons = ['tom', 'penny', 'grey','tom']
const toons = cartoons.map((cartoons,index)=><li key={index}>{cartoons}</li>)
  ReactDOM.render(
    <ul>{toons}</ul>,
    document.getElementById('root')
  );
