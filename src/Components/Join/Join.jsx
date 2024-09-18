import React, { useContext, useState } from 'react'
import './join.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faRedo } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
export const Join = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordR, setPasswordR] = useState("")
  const [accept, setAccept] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const nav =useNavigate()
  async function Submit(e) {
    e.preventDefault()
    setAccept(true)
    try {
        let res = await axios.post("https://localhost:7198/api/User/RegisterUser", {
          userName: name,
          email: email,
          password: password,
        })
        nav('/login')
    } catch (error) {
      if(error.response.status === 422){
        setEmailError(true)
      }
      setAccept(true)
    }
  }
  return (
    <div className='Join'>
      <div className='JoinContainer'>
        <div className='JRight'>
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
          <form onSubmit={Submit}>
          <Form.Label htmlFor="Name" style={{ fontSize: '20px' }}>
          <FontAwesomeIcon icon={faUser} style={{color:'royalblue'}} /> User Name
</Form.Label>
            <Form.Control
              type="text"
              id="Name"
              aria-describedby="passwordHelpBlock"
              className='formInput'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {name === '' && accept && <p className='error'>UserName is required</p>}

            <Form.Label htmlFor="email" style={{fontSize:'20px'}} >
            <FontAwesomeIcon icon={faEnvelope} style={{color:'royalblue'}} /> Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              aria-describedby="passwordHelpBlock"
              className='formInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {accept && emailError  && <p className='error'>Email is already exist</p>}

            <Form.Label htmlFor="inputPassword5" style={{fontSize:'20px'}}>
              <FontAwesomeIcon icon={faLock} style={{color:'royalblue'}} /> Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              className='formInput'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password.length < 8 && accept && <p className='error'>Please Enter Password more than 6</p>}
            <Form.Label htmlFor="lastName" style={{fontSize:'20px'}}>
            <FontAwesomeIcon icon={faRedo} style={{color:'royalblue'}} /> Retype Password</Form.Label>
            <Form.Control
              type="password"
              id="lastName"
              aria-describedby="passwordHelpBlock"
              className='formInput'
              value={passwordR}
              onChange={(e) => setPasswordR(e.target.value)}
              required
            />
            {passwordR !== password && accept && <p className='error'>Passwords are different</p>}
            <Button variant="success" type="submit" style={{ alignSelf: 'center' , fontSize:'20px' }} className='submitBtn'>Submit</Button>
            <p className="forgot-password text-right" style={{ textAlign: 'center' }}>
              You have an account? <Link to='/login'>Login</Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}
