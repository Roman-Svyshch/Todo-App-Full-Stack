import { useState } from 'react'
import './Counter.css'
import{PropTypes} from 'prop-types'

export default function Counter (){

  const [count,setCount] =  useState(0)

  function incrementParentCounterFunction(by){
    setCount(count + by)

  }
  function decrementParentCounterFunction(by){
    setCount(count - by)

  }
  function resetCounter(){

    setCount(0)
  }
 
  return(
    <div className="Counter">
      <span className="totalCount">{count}</span>
    <CounterButton by={1} 
    increment={incrementParentCounterFunction}
    decrement={decrementParentCounterFunction}/>
    <CounterButton by={2} 
    increment={incrementParentCounterFunction}
    decrement={decrementParentCounterFunction}/>
    <CounterButton by={5} 
    increment={incrementParentCounterFunction}
    decrement={decrementParentCounterFunction}/>

    <button className='resetButton' onClick={resetCounter}>Reset</button>
  </div>
  )
}


function CounterButton({by,increment,decrement,reset}){ 


  const [count,setCount] =  useState(0)

  function resetZero(){

  }


  function incrementCounterFunction(){
    setCount(count + by)
    increment(by)

    console.log("counter " + count)
  }
  function decrementCounterFunction(){
    setCount(count - by)
    decrement(by)
  }
 
  
  
  return(
    <div className="Counter">
        <div>   
         <button className="counterButton" onClick={incrementCounterFunction}>+{by}</button> 
         <button className="counterButton" onClick={decrementCounterFunction}>-{by}</button>
         <button className="counterButton" onClick={reset}>reset</button>

        </div>
    

    </div>
  )
 }
 CounterButton.propTypes ={
  by:PropTypes.number
 }
 CounterButton.defaultProps = {
  by : 5
 }