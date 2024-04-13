// import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(0)
  const incrementSet = () =>{
    setCounter(counter + 1)
  }
  const decrementSet = () =>{
    setCounter(counter - 1)
  }
  return (
    <div className="App App-header">
      <h1 >Counter number is {counter}</h1> 
      <br/>
      <div className='my-5'>
        <button className='btn btn-success fw-bold' onClick={incrementSet}>+</button> 
       <button className='btn btn-danger fw-bold ms-3' onClick={decrementSet}>-</button> 
       </div>
      
    </div>
  );
}

export default App;
