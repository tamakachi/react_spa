import './App.css';

  //React hooks begins with use keyword
import { useState } from 'react'

import Title from './components/Title';
import RandomText from './components/RandomText';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  

  // Changing a variable's value does not refresh the page with the same information
  // For instance, although name variable is displayed in the h3, when name is changed on button click, the information in the browser does
  // not change, the variable however does change as shown in the console 

  // useState hook can be used to change state to allow the changing of variable value with simultaneous updates to the page



  // The first value (name for example) in a useState is the getter variable and it can be used to get the value like a normal variable
  // The second value (setName for example) in a useState is the setter variable and it can be used to change the state to something else
  

  const [list, setList] = useState([])

  const [showList, setShowList] = useState(true)
  const [showModal,setShowModal] = useState(false)


  const addEvent = (event) =>{
    setList((prevState)=>{
      return [...prevState,event]
    })


  }

  const hideModal = () => {
    setShowModal((prevState)=>{return prevState=false})
  }

    
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
      <Title title="Props" subtitle="These are props used in a react component" />
      <RandomText text="And props!"></RandomText>
      <h2>State</h2>
      {/* Code can be put in onClick methods, simply use an anonymous callback function, like ()=>{console.log("Hi")} inside the onClick{} */}

      {!showList && (<div>
      <button onClick={()=>{setShowList((prevState)=>{return prevState=true})}}>Show List</button>
      </div>)}
      {showList && (
      <div>
        <button onClick={()=>{setShowList((prevState)=>{return prevState=false})}}>Hide List</button>
      </div>)}
      
      {/* When outputting a list into JSX, a unique key is required for each entry, attach a key to each parent element such as a div */}
      {/* To conditionally execute a block of code, simply place the boolean variable followed by && before the code block,
        if the boolean is true, the code will execute, otherwise it will not execute */}
      
      {showList && <EventList list={list} deleteClick={deleteClick}></EventList>}

      <button onClick={()=>{setShowModal(true)}}>Add New Event</button>
        {showModal && <Modal hideModal={hideModal} isSalesModal="true">
          <NewEventForm addEvent={addEvent}/>
        </Modal>}
    </div>
  );
}

export default App;
