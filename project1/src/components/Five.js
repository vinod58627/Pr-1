import React, { useState, useCallback } from 'react'
const funccount = new Set();


/*const Five = () => {
 
 
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
 
  const incrementCounter = () => {
    setCount(count + 1)
    console.log(count)
  }
  const decrementCounter = () => {
    setCount(count - 1)
    console.log(count)
  }
   
   const incrementNumber = () => {
    setNumber(number + 1)
    console.log(number)
  }
   
funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
alert(funccount.size);
 
  return (
    <div>
      Count: {count}
      <button onClick={incrementCounter}>
        Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <button onClick={incrementNumber}>
        increase number
      </button>
    </div>
  )
}
 
 
export default Five;*/

/*import React, { useState, useCallback } from 'react'
var funccount = new Set();*/



export default function Five() {
const [count, setCount] = useState(0)
  const [number, setNumber] = useState(10)
 
const incrementCounter = useCallback(() => {
  setCount(count + 1)
}, [count])
const decrementCounter = useCallback(() => {
  setCount(count - 1)
}, [count])
const incrementNumber = useCallback(() => {
  setNumber(number + 1)
}, [number])
const dechandler=useCallback(()=>{
       setNumber(number-1)}, [number])

funccount.add(incrementCounter);
funccount.add(decrementCounter);
funccount.add(incrementNumber);
funccount.add(dechandler)
//alert(funccount.size);
 
  return (
    <div>
    <h3 className="text-center">UseCallBack component</h3>
      Count: {count}
      <button onClick={incrementCounter}>
         Increase counter
      </button>
      <button onClick={decrementCounter}>
         Decrease Counter
      </button>
      <p>{number}</p>
      <button onClick={incrementNumber}>
         increase number
      </button>
      <button onClick={dechandler}>
         Dec number
      </button>
    </div>
  )
}
 
 /*function Five(){
const [num, setNum]= useState(0)
const [day, setDay]= useState(10)
return(<>

<p>{num}</p>
<button onClick={()=>setNum(num+1)}>Inc</button><br />
<button onClick={()=> setNum(num-1)}>Dec</button>
<p>{day}</p>
<button onClick={()=>setDay(day+1)}>Inc</button><br />
<button onClick={()=> setDay(day-1)}>Dec</button>



</>)
      }
      export default Five;*/
      
 
