import React, { useEffect, useState }  from 'react'

function Counter1() {
   const [ count, setCount]= useState(0)


   useEffect(()=>{
       const counter = Number(localStorage.getItem("count") || 0 )
       setCount(counter)
   }, [])
   useEffect(()=>{
       localStorage.setItem("count", count)
   }, [count])

   const handleChange =()=>{
       setCount(count=> count+1)

   }
  return (<div>
      <h3> { count} </h3>

      <button onClick={handleChange}> Inc</button>
      
      
      
      </div>)
}
export default Counter1;
