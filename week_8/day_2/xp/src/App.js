import logo from './logo.svg';
import './App.css';
import PrintHello from './components/PrintHello';
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './components/BootstrapCard';
import Jumbotron from './components/Jumbotron';

//XP4
function App() {
  return ( 
    <div className = "App" >
      <Jumbotron
          title="Welcome to react"
          description="React is the most popular rendering library in the world"
          buttonLabel="Go to the official website"
          buttonURL="https://reactjs.org/"
      />
    </div>
  );
}




//XP 1+2+3
// function App() {
//   return ( 
//     <div className = "App" > 
//       {/* <PrintHello /> */}
//      <BootstrapCard 
//           title = "McCartney"
//           imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg"
//           buttonLabel = "Go to Wikipedia"
//           buttonUrl = "https://en.wikipedia.org/wiki/Paul_McCartney"
//           description = "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles." 
//     />

//     </div>
//   );
// }

export default App;