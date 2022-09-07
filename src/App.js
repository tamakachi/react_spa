import './App.css';

  //React hooks begins with use keyword
import { useState } from 'react'

function App() {

  // Changing a variable's value does not refresh the page with the same information
  // For instance, although name variable is displayed in the h3, when name is changed on button click, the information in the browser does
  // not change, the variable however does change as shown in the console 

  // useState hook can be used to change state to allow the changing of variable value with simultaneous updates to the page



   const [name, setName] = useState('Kent')
   const [list, setList] = useState([
    {name:"Kent",age:33,id:0},
    {name:"Ben",age:33,id:1},
    {name:"Max",age:11,id:2}])

    console.log(list)

  const changeName = () => {
    setName("Ben")
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
