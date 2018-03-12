import React from 'react'
import ReactDOM from 'react-dom'

function Message(props){
  if (props.value) {
    return <h1>this is the first message</h1>
  }
    return <h2>this is the second message</h2>
}
class Btn extends React.Component {
   constructor(props){
       super(props);
       this.state = {value: true}
   }
   handleClick = () => {
     this.setState({
value : !this.state.value
});
}
render(){
return(
  <div>
   <button onClick={this.handleClick}>Change The Message</button>
   <Message value={this.state.value} />
</div>

);
}
}

ReactDOM.render(
  <Btn />,
  document.getElementById('root')
);
