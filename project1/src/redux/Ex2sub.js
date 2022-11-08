import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Ex2sub() {
    const dispatch= useDispatch()
    const [name, setname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

 const handler=()=>{
     dispatch({
         type : 'Register',
         payload : {
             id: (new Date()).getTime(),
             name, username, password, confirmPassword
         }

     })
 }


  return (<div>

      <form >
          <input type="text" value={name} placeholder="name" onChange={(e)=>setname(e.target.value)} />
          <input type="text" value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)} />
          <input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
          <input type="password" value={confirmPassword} placeholder="password" onChange={(e)=>setConfirmPassword(e.target.value)} />
          <button type="button" onClick={handler}> Submit</button>
      </form>
  </div>
  )
}
