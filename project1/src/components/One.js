import React,{ useState} from 'react'
import TodoList from './Todolist'

export default function One() {

    const [val , setVal] = useState('')
    const [todos, setTodos] = useState([])

    
    const namechangeHandler=(e)=>{
        setVal(e.target.value)
    
    }
    /*const changeHandler=(e)=>{
        setVal(e.target.value)
    
       
    }
    const YearchangeHandler=(e)=>{
        setVal(e.target.value)
    
    }*/
    const submitHandler=(e)=>{
        e.preventDefault();
        
        const newtodo = [...todos, val]
        setTodos(newtodo);
        setVal("")
    }
   const deleteHandler =(indexValue)=>{
       const newTodos = todos.filter((todos, index)=>index !== indexValue);
       setTodos(newTodos)

   }

  return (<div>
        
        <center>
        <form autoComplete="off" onSubmit={submitHandler.bind(this)} className="justify-content-center">
            
            <div className="card mx-auto">
            <h3 className="card-title text-center "> Form Todo Component</h3>
            <div className="card-body">
            <input type="text" value={val} className="w-25 mx-auto" name="name" onChange={namechangeHandler.bind(this)} required/><br /><br />
            
           
            
            <button type="submit" className="btn btn-success"> Send</button>
            </div>
            </div>
        </form>
        
        
       <TodoList todos={todos} deleteHandler={deleteHandler} />
        </center>
        
      
    </div>)
}
