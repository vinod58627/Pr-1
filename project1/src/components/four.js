/*import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addby, reset } from '../redux/counterReducer'

export default function Four(props) {
    const count = useSelector((state)=>state.counter.value)
    const dispatch= useDispatch()
    const [val , setVal]= useState(0)
    const setAll = Number(val) || 0;

    const resetAll =()=>{
        setVal(0);
        dispatch(reset)
    }
  return ( <div>
      <h2> Redux Toolkit Uses</h2>

      <div >
          <p>{val}</p>
          <label>
              <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
          </label>
          <button onClick={dispatch(addby(setAll))} >Add</button>
          
      </div>
      <p>{count}</p>
      <div>

          <button onClick={()=>dispatch(increment())}>Add</button>
          <button onClick={()=>dispatch(decrement())}>Dec</button>
          <button  onClick={()=>dispatch(reset())} >Reset</button>
          
          
      </div>
      
      </div>
  )
}*/
import { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  //const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => setCount(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  /*const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };*/

  return (
    <div>
     {/*} <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>*/}
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};
/*const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};*/

export default App;