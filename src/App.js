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
    <div className='bg-cls py-5 px-3 align-items-center'>
      <h3>Counter number is <h1><span className='fw-bolder'>{counter}</span></h1></h3> 
      <br/>
        <div className='my-4'>
          <button className='btn btn-success fw-bold w-25' onClick={incrementSet}>+</button> 
          {
          counter>0 && <button className='btn btn-danger fw-bold w-25 ms-3' id='decrementId' onClick={decrementSet}>-</button>
          }        
        </div> 
    </div>
    </div>
  );
}

export default App;
