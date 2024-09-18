import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export const CreateUser = () => {

    
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordR, setPasswordR] = useState("")
  const [accept, setAccept] = useState(false)
  // const [flag,setFlag] = useState(true)
  const [emailError, setEmailError] = useState("")
  // console.log(flag)
  async function Submit(e) {
    let flag = true;
    e.preventDefault()
    setAccept(true)

    if (name === "" || password.length < 8 || passwordR !== password) {
      flag = false
    } else flag = true

    try {
      if (flag) {
        let res = await axios.post("https://localhost:7198/api/User/create", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordR,

        })

        if (res.status === 200) {
          try {
            window.location.pathname = 'dashboard/users';
          } catch (error) {
            // Handle storage errors gracefully (optional)
            console.error('Error storing email in local storage:', error);
            // You can display an error message to the user here (if applicable)
          }
        }
      }
    } catch (error) {
      setEmailError(error.response.status)
    }

  }
  return (
    <div>
        <form onSubmit={Submit}>
            <Form.Label htmlFor="Name">Name</Form.Label>
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

            <Form.Label htmlFor="email" >Email</Form.Label>
            <Form.Control
              type="email"
              id="email"
              aria-describedby="passwordHelpBlock"
              className='formInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {accept && emailError == 422 && <p className='error'>Email is already exist</p>}

            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
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

            <Form.Label htmlFor="lastName" >Retype Password</Form.Label>
            <Form.Control
              type="text"
              id="lastName"
              aria-describedby="passwordHelpBlock"
              className='formInput'
              value={passwordR}
              onChange={(e) => setPasswordR(e.target.value)}
              required
            />
            {passwordR !== password && accept && <p className='error'>Passwords are different</p>}

            {/* <Form.Label htmlFor="phone">Phone</Form.Label>
            <Form.Control
              type="phone"
              id="phone"
              aria-describedby="passwordHelpBlock"
              className='formInput'
            /> */}
            {/* <Form.Label htmlFor="occupation">Occupation</Form.Label>
            <Form.Control
              type="text"
              id="occupation"
              aria-describedby="passwordHelpBlock"
              className='formInput'
            />
            <Form.Label htmlFor="specialization">Specialization</Form.Label>
            <Form.Control
              type="text"
              id="specialization"
              aria-describedby="passwordHelpBlock"
              className='formInput'
            /> */}
            {/* <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="Admin"

            /> */}
            <Button variant="success" type="submit" style={{ alignSelf: 'center' }} className='submitBtn'><Link to='/dashboard/users' style={{ color: 'white' }}>Create User</Link></Button>
          

          </form>
    </div>
  )
}
