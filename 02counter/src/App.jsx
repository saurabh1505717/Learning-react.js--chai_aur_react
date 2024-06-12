import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]=useState(5);

  // let counter = 5;

  const addValue = () => {
    // console.log("value added", Math.random());

    // counter=counter+1;
    console.log(counter);
    
    // counter=counter+1;
    // setCounter(counter);

    // OR
    if(counter<20){
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);

      // The above code will increase it by one only as the diffing algo. fibre send the updates into batches or bunch, it sees that here the same thing is happening therefore it will create a batch of it and will send it one time.

      // If you still stuck in a case where you want to increase it more than one in same way then you can use the callbacks which is accepted by setter method, so we can pass a callback while updation. like:

      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);

      // In this way we can update it more than one on a click as when it comes through callback then the next call happens after the completion of first call and there the proper updation happens.
    }
  }

  const removeValue = () => {
    if(counter>=0){
      setCounter(counter--);
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase Value {counter}</button>
      <br />
      <button onClick={removeValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
