import React, { useState } from 'react'
import { Container } from '@mui/material'

const Reg=()=>{
    const initialState={
        username:'',
        email:'',
        password:''
    }
    const [formValues, setFormValues] = useState (initialState);
    const [ formErrors, setFormErrors]= useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    
   /* useEffect=(()=>{
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues)
        }

    }, [formErrors])*/

    const changeHandler=(e)=>{
  //console.log(formValues)
    const {name, value}= e.target;
        setFormValues({...formValues ,[name]:value})
    }
    const validate=(values)=>{
        const errors={}
        const regex= /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
        if(!values.username){
            errors.username="Username is required"
        }
        if(!values.email){
            errors.email="Emial is Required"
        }
        else if(!regex.test(values.email)){
            errors.email="This email not Valid"
        }
    
        if(!values.password){
            errors.password="Password is Required"
        }
        else if(values.password.length < 4){
            errors.password="Your password must be greater than 4"

        }
        else if(values.password.length > 10){
            errors.password="Your password must be less than 10"

        }
        return errors;
    }
   /* const validate=()=>{
        const errors={}
        //const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!formValues.username){
            errors.username="username is Required"
        }
        if(!formValues.email){
            errors.email="Emial is Required"
        }
    
        if(!formValues.password){
            errors.password="Password is Required"
        }
        return errors;

    }*/
    const submitHandler=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }
    


    return(<Container className="w-50 m-auto">
                    <h3 className="text-center"> Registraion - form</h3>
                    {
                        Object.keys(formErrors).length === 0 && isSubmit ? 
                        (<div className="text-center text-success"> SignUp Successfully</div>) :
                        (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>)

                    }
                    
                    <center>
                        <form className="p-4 border bg-light" autoComplete='off' onSubmit={submitHandler} noValidate>
                            
                                <input type="text" 
                                    value={formValues.username} 
                                    className="form-control m-1" 
                                    placeholder='enter your name' 
                                    name="username" 
                                    onChange={changeHandler} />
                                    <p className="text-danger">{formErrors.username}</p>
                                <input type="email" 
                                    value={formValues.email}  
                                    className="form-control m-1" 
                                    placeholder='enter your email' 
                                    name="email" 
                                    onChange={changeHandler}  />
                                    <p className="text-danger">{formErrors.email}</p>
                                <input type="password" 
                                    value={formValues.password}  
                                    className="form-control m-1" 
                                    placeholder='enter your password' 
                                    name="password" 
                                    onChange={changeHandler}  />
                                    <p className="text-danger">{formErrors.password}</p>


                                <center><button type="submit" className="text-center btn btn-success"> Submit</button></center>
                            
                        </form>




                    </center> 
                    </Container>)


}

export default Reg;