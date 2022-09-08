import './App.css';

  //React hooks begins with use keyword
import { useState } from 'react'

function App() {

  // Changing a variable's value does not refresh the page with the same information
  // For instance, although name variable is displayed in the h3, when name is changed on button click, the information in the browser does
  // not change, the variable however does change as shown in the console 

  // useState hook can be used to change state to allow the changing of variable value with simultaneous updates to the page



  // The first value (name for example) in a useState is the getter variable and it can be used to get the value like a normal variable
  // The second value (setName for example) in a useState is the setter variable and it can be used to change the state to something else
  

  const [list, setList] = useState([
    {name:"Kent",age:33,id:0},
    {name:"Ben",age:33,id:1},
    {name:"Max",age:11,id:2}])

  const [showList, setShowList] = useState(true)

    
// While it may be tempting, when using setState like setList to simply change the value of list, this can cause bugs
// If you want to change state without bugs, use prevState through a callback function and work with that instead

  const deleteClick = (id) => {
    setList((prevState)=>{
      return prevState.filter((item)=>{
      return item.id !== id
    })})
  }

  return (
    <div className="App">
      <h2>State</h2>
      {/* Coe can be put in onClick methods, simply use an anonymous callback function, like ()=>{console.log("Hi")} inside the onClick{} */}

      <button onClick={()=>{setShowList((prevState)=>{return prevState=true})}}>Show List</button>
      <button onClick={()=>{setShowList((prevState)=>{return prevState=false})}}>Hide List</button>
      <button onClick={()=>{console.log(showList)}}>ShowList Variable</button>
      
      {/* When outputting a list into JSX, a unique key is required for each entry, attach a key to each parent element such as a div */}
      {/* To conditionally execute a block of code, simply place the boolean variable followed by && before the code block,
        if the boolean is true, the code will execute, otherwise it will not execute */}
      
      {showList && list.map((item)=>(
      <div key={item.id}>
        <h2>Name: {item.name}, Age: {item.age}</h2>
        <button onClick={()=>{deleteClick(item.id)}}>Delete</button>
      </div>
      ))}
    </div>
  );
}

export default App;
