import React from 'react'

export default function Todolist({todos,deleteHandler}) {
  return (<div>
      
      
      
      <h3> <u>Todo list</u></h3>
      {
          todos.map((todo, index)=><div key={index}>
              <h5>{todo}&nbsp;&nbsp; <button onClick={()=>deleteHandler(index)} className="btn btn-danger text-white">Delete</button></h5>
          </div>)
      }
      
      
      </div>
  )
}
/*export default function Todolist(props) {
    return (<div>
        
        
        
        <h1> Todo list</h1>
        {
            props.todos.map((todo, index)=><div key={index}>
                <h5>{todo}&nbsp;&nbsp; <button onClick={()=>props.deleteHandler(index)} className="btn btn-danger text-white">Delete</button></h5>
            </div>)
        }
        
        
        </div>
    )
  }*/
