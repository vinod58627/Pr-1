import React , { useState, useEffect } from 'react'
/*import { Typography } from '@mui/material'

export default function Ex1() {
  return (<div>
    
    
    <Typography>Ex1- Component</Typography>
    
    
    </div>
  )
}*/
const longResolve=()=>{
    return new Promise(res => {
      setTimeout(res, 3000);
    });
  }

export default function Ex1() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      longResolve().then(() => {
        alert(count);
      });
    }, [count]);
  
    return (
      <div>
          <h4> Count: {count}</h4>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
         Click
        </button>
      </div>
    );
  }