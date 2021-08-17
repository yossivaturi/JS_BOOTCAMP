const Box = (props) => {

    // <Box name = {this.state.languages[0].name} 
    // votes={this.state.languages[0].votes} 
    // onButtonClick = {this.phpClick}/>
    const {name,votes,onButtonClick} = props;
   //now languages hold an array with 4 objects
   
    return (
      <>
        <div>
          <div>
            <h4>{name}</h4>
            <p>{votes}</p>
            <button onClick={onButtonClick}>Click Here</button>
          </div>
        </div>
      </>
    )
  }
  export default Box;
  