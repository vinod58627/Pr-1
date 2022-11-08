import React, { useState, useEffect } from "react"




function Counter() {
  const [count, setCount] = useState(1);
  const [counter, setCounter]= useState(0)
  const [name, setName] = useState(() =>{ 
                                     // getting stored value
									const saved = localStorage.getItem("name");
									const initialValue = JSON.parse(saved);
									return initialValue || "";
								});

 
  
  useEffect(() => {
    const parsedCount = Number(localStorage.getItem("count") || 0)
	const counter = Number(localStorage.getItem("counter") || 0)
	setCount(parsedCount)
	setCounter(counter)	
  }, [])

   useEffect(() => {
    localStorage.setItem("count", count)
	localStorage.setItem("counter", counter)
	localStorage.setItem("name", JSON.stringify(name));
  }, [count, counter, name])
const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleInc = () => {
    setCounter(prevCount => prevCount + 1);
  };

  return (
    <div>
	<form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>
		<center>
      <h5>Count is {count}</h5>
      <button onClick={handleIncrement}>+</button>
	  <button onClick={()=>setCount(0)} >Reset</button>
	 
	  <div>
		  <h3> {counter}</h3>
		  <button onClick={handleInc}> INCS</button>
		  <button onClick={()=>setCounter(0)} >Reset</button>
	  </div>

	  
		 {/*} <Counter1 />*/}
	  </center>
    </div>
  );
}
export default Counter;


/*function Vinod(){
	const [ count, setCount]= useState(0)

	 useEffect(()=>{
		 const counter = Number(localStorage.getItem("count") || 0)
		 setCount(counter)
	 }, [])


	const handleClick =()=>{
		setCount(prevCount=> prevCount + 1)
	}

	return(<>

	<h3> {count} </h3>
	<button onClick={handleClick}>Click</button> 
	</>)
}
export default Vinod*/
//And here is my App.js where I am calling the counter button:

/*function App() {

const loadUsers = async () =>
  await fetch("")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())


  const { data, isLoading } = useAsync({ promiseFn: loadUsers })
  if (isLoading) return "Loading..."
  if (data)

  return (
    <div className="container">
      <div>
      </div>
      {data.map(user=> (
        <div key={user.username} className="row">
          <div className="col-md-12">
            <h2>{user.name}</h2>
            <h3>{user.title}</h3>
            <Counter/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;*/

/*import React from 'react'

function Jsx (){
    return(<>
    <h4>jsx Component</h4>
    
    
    </>)
}
export default Jsx;*/
/*import React,{ useState, useMemo } from "react";

const Jsx = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
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

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default Jsx;*/

/*import React, {useState, useMemo} from 'react';

function App() {
const [number, setNumber] = useState(0)
// Using useMemo
const squaredNum = useMemo(()=> {
	return squareNum(number);
}, [number])
const [counter, setCounter] = useState(0);

// Change the state to the input
const onChangeHandler = (e) => {
	setNumber(e.target.value);
}
	
// Increases the counter by 1
const counterHander = () => {
	setCounter(counter + 1);
}
return (
	<div className="App">
	<h1>Welcome to Geeksforgeeks</h1>
	<input type="number" placeholder="Enter a number"
		value={number} onChange={onChangeHandler}>
	</input>
		
	<div>OUTPUT: {squaredNum}</div>
    <p>{counter}</p>
	<button onClick= {()=>setCounter(counter+1)}>Counter ++</button>
	<div>Counter : {counter}</div>
	</div>
);
}

// function to square the value
function squareNum(number){
console.log("Squaring will be done!");
return Math.pow(number, 2);
}

export default App;*/
