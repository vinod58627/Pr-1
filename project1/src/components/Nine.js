import { useReducer } from "react";
import { Typography } from '@mui/material'


const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    desc:'This is First label',
    price:12000,
  },
  {
    id: 2,
    title: "Todo 2",
    desc:'This is First label',
    price:13000,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo,
        
        
        };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Nine() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>

    <Typography variant='h4' color="red" align="center">UseReducer - Component</Typography>
      {todos.map((todo) =>(<div key={todo.id}>
            
            
            <h3> {todo.id}</h3>
            <p>{todo.title}</p>
            <h4>{todo.desc}</h4>
        </div>
      ))}
    </>
  );
}
export default Nine;


/*import { useReducer } from "react";
import { Typography } from '@mui/material'


const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>

    <Typography variant='h4' color="red" align="center">UseReducer - Component</Typography>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
            <h3> {todo.id}</h3>
            <h4>{todo.title}</h4>
          </label>
        </div>
      ))}
    </>
  );
}
export default Todos;*/