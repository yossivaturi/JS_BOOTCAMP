import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};
  return (
    <div className="App">
      <Car 
        name={carinfo.name}
        model={carinfo.model}
      />
    </div>
  );
}

export default App;
