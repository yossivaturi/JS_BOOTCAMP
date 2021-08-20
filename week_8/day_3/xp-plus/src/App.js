import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      isToggleOn: true,
      show:'ON'
    }
  }

  toggle = () => {
    if(this.state.isToggleOn === true){
      this.setState(
        { isToggleOn: false,
          show: 'OFF' } 
        )
    }else{
      this.setState(
        { isToggleOn: true,
          show: 'ON' } 
      )
    }

  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      alert(`input: ${event.target.value}`);
    }
    
  }

  clickHandler = () => {
    alert('i was clicked');
  }

  render(){
    return (
      <div className="App">
        {/* <button onClick={this.clickHandler}>click me</button> */}
        {/* <input onKeyPress={this.handleKeyPress}></input> */}
        {/* <button onClick={this.toggle}>{this.state.show}</button> */}
  
      </div>
    );
  }

}

export default App;
