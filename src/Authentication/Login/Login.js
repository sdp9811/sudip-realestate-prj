import React,{useState} from 'react'
import { Form,Button, Carousel } from 'react-bootstrap'
 import './Login.css'
 import axios from 'axios'
import { useHistory } from 'react-router-dom'


export const Login = () => {
  
  let history=useHistory()
  const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{2,10}).([a-z.]{2,20})$')
  const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
  const[inputState,setInputState]=useState({isError:{
    email: ' ',
    password: ''
  
  }})
  const handleChange=(event)=>{
    event.persist();
    // console.log(event);
    let {name,value}=event.target
    let errHandle={...inputState.isError};
    setInputState({...inputState,[name]:value})
    //  console.log("InputState: ", inputState)
    switch(name){
        case "email":
          errHandle.email=
          validateEmail.test(value)?"": "Wrong pattern"
          break;
          case "password":
            errHandle.password=
            validatePassword.test(value)?"": "Wrong pattern"
              break;
            
            
            
    }
    setInputState({...inputState,[name]:value,isError:errHandle});
// console.log("InputState: " , inputState)
}
const submitHandler=(event)=>{
  
  event.preventDefault();
  console.log(inputState);
  const value={email:inputState.email, password:inputState.password};
  
  axios.post('https://project-node-1.herokuapp.com/postLoginData',value)
  .then((res)=>{
    console.log("Axios response: ",res);
    history.push("/mcat")
    window.sessionStorage.setItem("Token",res.data.token)
  })
  .catch((err)=>{
    console.log(err);
  })

}
    
    return (

      <div > 
      
      <Form onSubmit={submitHandler} className="frm">
        <h1> Login Form </h1>
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
        
        <Button variant="primary" type="submit" className="btn" >
    login here
  </Button>
  <Form.Group></Form.Group>  
  </Form>

</div>

      
    )
}

