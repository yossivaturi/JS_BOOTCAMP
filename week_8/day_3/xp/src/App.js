import logo from './logo.svg';
import './App.css';
import Color from './Components/Color'
import React from 'react';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      
    }
    this.shootRegular = this.shootRegular.bind(this);
  }

  shoot() {
    alert("Great Shot!")
  }

  shootRegular() {  
    alert(this);
  }

  shootRegularWithParameter(){
    alert(this);
  }

  shootWithArgument(value) {
    alert(value);
  }

  shootTwo() {
    alert(this);
  } 

  render(){
    return(
      <div className="App">
        {/* <Color /> */}
        {/* <button onClick={this.shoot}>Take the Shot</button> */}
        {/* <button onClick={this.shootRegular}>Keep Shooting</button> */}
        {/* <button onClick={this.shootRegularWithParameter.bind("goal")}>Keep Shooting</button> */}
        {/* <button onClick={() => this.shootWithArgument("Goal")}>Keep Shooting</button> */}
        <button onClick={() => this.shootTwo()}>Keep Shooting</button>
    </div>
    );
}

}

export default App;
