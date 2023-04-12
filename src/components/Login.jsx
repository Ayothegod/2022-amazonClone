import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import {auth} from '../Firebase'
import {useNavigate} from "react-router-dom"

const Login = () => {
  

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

 
  

  const login = (event) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      // Redirect to the homepage
      navigate("/")
    })
    .catch((e) => {
      alert(e.message)
    });
  } 

  const register = (event) => {
    event.preventDefault()

    auth.registerWithEmailAndPassword(email, password)
    .then((auth) => {
      // created a user and redirected to hpmepage 
      navigate("/")
    })
    .catch((e) => {
      alert(e.message)
    });
  } 


  return (
    <div className='login'>
        <Link to='/'>
        <img src=" http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="szhjkhds" />
        </Link>
      <div className="login_form">
        <h1>Sign-in</h1>
        <div className="login_formm">
          <div className="login_form_indi">
            <h5>E-mail</h5>
            <input onChange={event => setEmail(event.target.value)} value={email} type="text" placeholder='' />
          </div>
          <div className="login_form_indi">
            <h5>Password</h5>
            <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder='' />
          </div>
          <button onClick={login}>Sign in</button>
        </div>

        <p>
          By signing in you agree to Amazons conditions of use and sale. Please see our privacy notice. our cookies notice and our interest based ads Notice
        </p>
        <button onClick={register} className='button'>Create your amazon account</button>
      </div>
    </div>
  )
}

export default Login