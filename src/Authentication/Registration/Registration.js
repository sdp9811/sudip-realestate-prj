import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import './Registration.css'
 import axios from 'axios'
import { Link, useHistory} from 'react-router-dom';



export const  Registration=()=> {
  
  let history=useHistory()
  const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$')
  const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
  // const validatePhn=RegExp('[7-9]{1}[0-9]{9}')
  
const[inputState,setInputState]=useState({isError:{
  username:' ',
  email: ' ',
  password: ''

}})
const handleChange=(event)=>{
  event.persist();
  // console.log(event);
  let {name,value}=event.target
  let errHandle={...inputState.isError};
   setInputState({...inputState,[name]:value})
  console.log("InputState: ", inputState)
  switch(name){
    case "username":
      errHandle.username=
      value.length<5? "Atleast 5 characters" : "";
      break;
      case "email":
        errHandle.email=
        // value.length<10? "atleast 10 characters" : "";
        validateEmail.test(value)?"": "Wrong pattern"
        break;
        case "password":
          errHandle.password=
          validatePassword.test(value)?"": "Wrong pattern"
          //  value.length<5? "atleast 5 characters" : "";
           break;
          
          
          
  }
setInputState({...inputState,[name]:value,isError:errHandle});
// console.log("InputState: " , inputState)
}
const submitHandler=(event)=>{
   event.preventDefault();
   console.log(inputState);
   const value=inputState;

  axios.post('https://project-node-1.herokuapp.com/postUserData',value)
  .then((res)=>{
    console.log("Axios response: ",res);
    history.push("/lgn")
  })
  .catch((err)=>{
    console.log(err);
  })

}

    return (
      <div >
        
        <div className="container">   
      
        <Form onSubmit={submitHandler}>
          <h1> Registration Form </h1>
            <Form.Group className="mb-3" controlId="formBasicfname">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first Name" name="username" onChange={handleChange} />
          {inputState.isError.username.length>0 && (<span>{inputState.isError.username}</span>)}
          <Form.Text className="text-muted">
        
          </Form.Text>
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasiclname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last Name" name="lastname" onChange={handleChange}  />
          {inputState.isError.lastname.length>0 && (<span>{inputState.isError.lastname}</span>)}
          <Form.Text className="text-muted">
        
          </Form.Text> */}
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
          {inputState.isError.email.length>0 && (<span>{inputState.isError.email}</span>)}
          <Form.Text className="text-muted">
        
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  name="password" onChange={handleChange} />
          {inputState.isError.password.length>0 && (<span>{inputState.isError.password}</span>)}
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number"  name="phone" onChange={handleChange} />
          {inputState.isError.phone.length>0 && (<span>{inputState.isError.phone}</span>)}
        </Form.Group> */}
        
        <Button variant="primary" type="submit" className="btn" >
   SignUp
  </Button>
  <Form.Group>
  <p>already have account?</p>
  </Form.Group>
  <Button  className="lgnbtn">
      <Link to={`/lgn`} >Login here</Link>
      </Button>
      </Form>
      </div>
          </div> 
    )
}