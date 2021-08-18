import React from 'react';

class Color extends React.Component{
    constructor(){
        super();
        this.state = {
            favoriteColor: 'red'
        }
    }

    handleClick = () => {
        this.setState({favoriteColor:'blue'})
    }


    componentDidMount(){
        setTimeout(
            () => {this.setState({favoriteColor:'yellow'})}, 2000);
        
    }

    render(){
        return(
            <div>
                <header>My Favourite color is {this.state.favoriteColor}</header>
                <button onClick={this.handleClick}></button>
            </div>
        );
    }
}

export default Color;
