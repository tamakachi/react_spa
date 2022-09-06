import logo from './logo.svg';
import './App.css';

function App() {

  let name = "Kent"

  const changeName = () => {
    name = "Ben"
    console.log(name)
  }

  return (
    <div className="App">
      <h2>State</h2>
      <h3>My name is {name}</h3>
      <button onClick={changeName}>Change name variable</button>
    </div>
  );
}

export default App;
