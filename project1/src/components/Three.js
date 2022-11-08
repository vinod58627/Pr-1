import React,{useReducer, useState} from 'react'

const initialState={
    count:'0'
}
const reducer=(state, action)=>{
    switch(action.type){
        case "INC":
            return{
                ...state,
                count: state.count+1
            };
        case "DEC" :
            return {
                ...state,
                count: state.count-1
            };
        case "ADD" :
            return {
                ...state,
                count: action.payload
            };
        case "ADDBy" :
            return {
                ...state,
                count: state.count+action.payload
                };
        case "CLEAR" :
            return {
                ...state,
                //count: null
                //count:0
                count:0
                
                };
        default:
            return state;

    }
}


export default function Three() {
    const [input, setInput]= useState(0)
    const [state, dispatch]= useReducer(reducer, initialState)

  return (<div className="container">
      
     <center>
      <h3>UseReducer-Component:</h3><hr />
    
      <label>StateCount:
      <input type="number" value={input} onChange={(e)=> setInput(parseInt(e.target.value))} />
      </label>
      <button onClick={()=>dispatch({type: "ADD", payload:input})} className="btn btn-primary">Click</button>
      <h4>{state.count}</h4>
      
      <button className="btn btn-primary" onClick={()=> dispatch({type: "INC"})} >Inc</button> &nbsp;&nbsp;&nbsp;
      <button className="btn btn-secondary" onClick={()=> dispatch({type: "DEC"})} >DEC</button> &nbsp;&nbsp;&nbsp;
      <button className="btn btn-danger" onClick={()=>dispatch({type: "ADDBy", payload:10})}>Add 10</button>&nbsp;&nbsp;
      <button className="btn btn-danger" onClick={()=>dispatch({type: "CLEAR", payload:input})}>Clear</button>

      
      </center> 
      </div>
      
  )
}







/*import React, { useReducer } from 'react'


const initialState=[
    {id:1, name: 'vinod', email: 'vinod58627@gmail.com', location: 'hyd'},
    {id:2, name: 'kumar', email: 'kumar58627@gmail.com', location: 'knl'},
    {id:3, name: 'suman', email: 'suman58627@gmail.com', location: 'nrp'},
    {id:4, name: 'praveen', email: 'praveen58627@gmail.com', location: 'ndl'},

]

const reducer =(state, action)=>{
    switch(action.type){
        case "Hello":
            return state.map((res, i)=>{
                return(<ul key={i}>
                    <li>{res.id}</li>
                    <li>{res.name}</li>
                    <li>{res.email}</li>
                    <li>{res.location}</li>
                </ul>)
            });
            default:
                return state;
    }
}

function Three(){
    const [ users, dispatch]= useReducer(reducer, initialState);

    const handleComplete = () => {
        dispatch({ type: "Hello" });
      };
    return(<>
      {users.map((todo) => (
        <div key={todo.id}>
            <li>{todo.name}</li>
         
            {todo.title}
            <button onclick={handleComplete(todo)}>click</button>
        
        </div>
      ))}
    </>)
}
export default Three;*/