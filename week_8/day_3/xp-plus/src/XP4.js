import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class XP4 extends Component {
  constructor(){
    super();
    this.state = {
        username: '',
        age: null,
        errormessage: '',
        tavalue: 'textarea initial state',
        selectValue:'mango'
    }
  }

  // handleChange = (event) => {
  //   this.setState({username: event.target.value});
  // }
 
  handleAgeChange = (event) => {
    const age = event.target.value;
    if(!isNaN(parseInt(age)) || age.length === 0){
      this.setState({errormessage: ""})
    }else{
      this.setState({errormessage: "your age must be a number"});
    }
  }

  handleTextAreaChange = (event) => {
    // console.log(event.target.value);
    this.setState({tavalue: event.target.value});
  }

   handleSelectChange = (event) => {
    console.log(event.target.value);
    this.setState({selectValue: event.target.value}, 
      () => console.log(this.state.selectValue));
   
  }

  mySubmitHandler = (event) => {
      event.preventDefault();
      console.log(event.target.textarea.value);
      this.setState({username: event.target.userinput.value});
      this.setState({age: event.target.userage.value});
  }

  render(){
    const header = <h1> Hello {this.state.username} {this.state.age} </h1>
    return (
        <div className="App">
        <form onSubmit={this.mySubmitHandler}>
                {header}
                {/* <input onChange={this.handleChange}></input> */}
                <input name="userinput" placeholder="Enter your name"></input>
                <input name="userage" placeholder="Enter your age" onChange={this.handleAgeChange}></input>
                <label>{this.state.errormessage}</label>
                <textarea 
                  value={this.state.tavalue} 
                  onChange={this.handleTextAreaChange}
                />
                <label>
                  Pick your favorite flavor:
                  <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </label>                
                <button type="submit">Submit</button>
           
        </form>
        </div>
    );
  }

}

export default XP4;
