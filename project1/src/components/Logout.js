import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/LogReducer';
import { logout } from '../redux/LogReducer';


export default function LogOut() {
   const user= useSelector(selectUser)
   const dispatch = useDispatch()

  const handleLogout=(e)=>{
    e.preventDefault();
    dispatch(logout())

  }
  return (<div>
        <h3>Welcome Mr.{user} </h3>
      <button onClick={(e)=>handleLogout(e)}> Logout</button>
  </div>
  )
}
