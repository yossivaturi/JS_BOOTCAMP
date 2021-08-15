// In a separate javascript file, create a new Component 
// called MyComponent that contains some HTML tags.
//  For example: a header, a paragraph, a link, a form, an image and a list.
// Import MyComponent to the App.js file and display it.

import './MyComponent.css';
const MyComponent = () =>{
    const mystyle = {
        color: 'white',
        backgroundColor: 'DodgerBlue',
        padding: '10px',
        fontFamily: 'Arial'
    }
    const mysuperstyle = {
        color: 'yellow',
        fontSize: '16px',
        fontWeight: 'bold',
        border: '1px solid yellow',
        backgroundColor: 'black',
        padding: '5px',
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '10px'
    }
    
    return(<>
        {/* <header style={{backgroundColor: 'lightblue',color: 'red'}}>HELLO STYLE</header> */}
        {/* <header style={mystyle}>HELLO STYLE</header> */}
        {/* <header style={mysuperstyle}>HELLO STYLE</header> */}
        <header className="newStyle">HELLO STYLE</header>




        {/* <p>some paragraph</p>
        <a href="www.google.com"> some link</a>
        <form>

        </form>
        <img></img> */}

    </>) 
}

export default MyComponent;