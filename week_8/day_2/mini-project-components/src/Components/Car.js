import React from 'react';
import Garage from './Garage';

class Car extends React.Component {
    constructor(){
        super();
        this.state = {
            color: 'red'
        }
    }
    render(){
        return(
            <div>
                {/* <h2>Hi, I am a {this.state.color} Car!</h2> */}
                <h3>{this.props.name}</h3>
                <Garage size={'small'}/>
            </div>
            
        )
    }

        
    
}

export default Car;