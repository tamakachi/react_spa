import logo from './logo.svg';
import './App.css';

function App() {

  // Changing a variable's value does not refresh the page with the same information
  // For instance, although name variable is displayed in the h3, when name is changed on button click, the information in the browser does
  // not change, the variable however does change as shown in the console 

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
