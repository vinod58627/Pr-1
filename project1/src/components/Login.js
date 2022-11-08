import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectUser  } from '../redux/LogReducer';
import { login } from '../redux/LogReducer';




const LogIn=()=>{
    const dispatch=useDispatch(selectUser)

    const [ name, setName]= useState("")
    const [ email, setEmail]= useState("")
    const [ password, setPassword]= useState("")

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(login({
            name: name,
            emial: email,
            password:password,
            loggedIn: true
        }))
    }

    return(<Container>
    <center>
    <Typography variant='h3' color="red" align="center">Material UI Component</Typography>

    <form className="w-50 p-4 border bg-light" onSubmit={(e)=>submitHandler(e)}>
        <Typography variant="h5" color="yellowgreen"> LOG IN- Component</Typography>
        <input type="name" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} /><br />
        <input type="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)} /><br />
        <input type="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)} /><br />

        <button type="submit">Submit</button>
    </form>
    
    </center>
   </Container>)

    }
export default LogIn;
