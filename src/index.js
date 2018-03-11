import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {

   constructor(props){
       super(props);
       this.state={ count: 1}
   }

  onclick(type){
      this.setState(prevState => {
         return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
      });
  }

   render() {
    return (
      <div>
        Count: {this.state.count}
        <br/>
        <div style={{marginTop: '100px'}}/>
        <input type='button' onClick={this.onclick.bind(this, 'add')} value='Inc'/>
        <input type='button' onClick={this.onclick.bind(this, 'sub')} value='Dec'/>
       </div>
     )
   }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
