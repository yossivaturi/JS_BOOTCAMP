import logo from './logo.svg';
import './App.css';
const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5;

const listItems = <ul>
<li>Apple</li>
<li>Banana</li>
<li>GOYAVA</li>
</ul>

const object = {
  first_name: 'Bob',
  last_name: 'Dylan'
};

// const animals = ['Horse','Turtle','Elephant','Monkey'];
const animals = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];

function App() {
  const liArr = [];
 
  return (
    <div>


       
        {
          animals.map((item,i) => {
            {console.log(item['label'])}
            liArr[i] = <li key={i}> {item['label']}</li>
          })
        }
        <ul>
           {liArr.map((item,i) =>{
              return item
           })}
        </ul> 



{/* USING ARRAYS
        {
          animals.map((item,i) => {
            liArr[i] = <li>{item}</li>
          })
        }

        <ul>
           {liArr.map((item,i) =>{
              return item
           })}
        </ul> */}


          {/* XP6 */}
          {/* <h1>{`My name is ${object.first_name}`}</h1>
          <h3>{`My last name is ${object.last_name}`}</h3>  */}
            
            {/* XP 4+5 */}
            {/* <input type="text"></input> */}
            {/* {listItems} */}
            {/* <header>i am a header</header>
            <header>i am a header too</header> */}

            {/* XP3 */}
            {/* {myelement} */}
            {/* {`${sum}, what a number ha?`} */}
    </div>
  );
}

export default App;
