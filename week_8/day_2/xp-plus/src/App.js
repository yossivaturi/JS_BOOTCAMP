import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from './components/Alert ';




function App() {
  return (
    <div className="App">
        <Alert 
        text="OMG! Something really bad has happended!"
        color="red"
         />
        <Alert 
        text="NICE MESSEAGE"
        color="orange"
         />

         
    </div>
  );
}

//XP2
// function App() {
//   return (
//     <div className="App">
//         <Alert 
//         text="OMG! Something really bad has happended!"
//         show={false}
//          />
//         <Alert 
//         text="NICE MESSEAGE"
//         show={true}
//          />

         
//     </div>
//   );
// }

export default App;
