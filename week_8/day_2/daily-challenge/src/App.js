import logo from './logo.svg';
import React from 'react'
import './App.css';
import Box from './Components/Box'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ]
  }
  }

  click = (i) => {
    const languages = [
      {name: "Php", votes: this.state.languages[0].votes},
      {name: "Python", votes: this.state.languages[1].votes},
      {name: "JavaSript", votes: this.state.languages[2].votes},
      {name: "Java", votes: this.state.languages[3].votes}
  ]
    ++languages[i]['votes']
    
    this.setState({languages: languages})
  }

  render(){
  return (
    <div className="App">
        <h1>Vote your language!</h1>
        <Box name = {this.state.languages[0].name} 
             votes={this.state.languages[0].votes} 
               onButtonClick = {() => this.click(0)}/>

        <Box name = {this.state.languages[1].name} 
            votes={this.state.languages[1].votes} 
             onButtonClick = {() => this.click(1)}/>

        <Box name = {this.state.languages[2].name} 
            votes={this.state.languages[2].votes} 
             onButtonClick = {() => this.click(2)}/>

        <Box name = {this.state.languages[3].name} 
             votes={this.state.languages[3].votes} 
               onButtonClick = {() => this.click(3)}/>  

    </div>
  );
}
}

export default App;
