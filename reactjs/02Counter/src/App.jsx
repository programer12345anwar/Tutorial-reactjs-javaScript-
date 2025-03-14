 
import './App.css'
import { useState } from 'react'

function App() {
let [counter,setCounter]=useState(15);

const addValue=()=>{
  counter=counter+1;
  if(counter<=20){
    setCounter(counter);
  }
 
  // console.log("clicked",counter)
}

const removeValue=()=>{
  counter=counter-1;
  if(counter>=0){
    setCounter(counter);
  }
 
  // console.log("clicked",counter);
}



// let counter=10;

//   const addValue=()=>{
//      counter=counter+1;
//      console.log("clicked",counter)

//   }

//   const removeValue=()=>{
//     counter=counter-1;
//     console.log("clicked",counter)
//   }
 

  return (
    <>
       <h1>Chai aur code</h1>
       <h2>Counter Value: {counter}</h2>
       <button onClick={addValue}>Increment</button>
       <br/>
       <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
