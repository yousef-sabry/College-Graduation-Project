import React, { useContext, useState } from 'react';
import './login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [accept, setAccept] = useState(false)
  const [error, setError] = useState(false)
  const nav =useNavigate()
  async function Submit(e) {
    e.preventDefault()
    setAccept(true)
    try {
        let res = await axios.post("https://localhost:7198/api/User/Login", {
          email: email,
          password: password,
        })
        console.log(res.data)
        const token =res.data.token
        const userId =res.data.userId
        localStorage.setItem('token',token)
        localStorage.setItem('userId',userId)
        nav('/')
    } catch (error) {
      setAccept(true)
    }
  }
  return (
    <div className='Login'>
    <div className='LoginCont'>
    <div className="LoginForm" >
    <img src='../../../public/images/login.png' className='FormLogo'/>
            <form onSubmit={Submit}  style={{flex:'6 '}}>
                <div className="mb-3">
                    <label style={{fontSize:"23px" , fontWeight:"500"}} htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        id='email'
                        value={email}
      onChange={(e)=>setEmail(e.target.value)}
                        required
                    /> 
                </div>
                <div className="mb-3">
                    <label style={{fontSize:"23px" , fontWeight:"500"}} htmlFor="password">Password</label>
                    <input
                        type="password"
                        id='password'
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
      onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="formBtn">
                    <button style={{fontSize:"23px" , fontWeight:"500"}} type="submit" className="btn btn-primary">Submit</button>
                </div>
                <p className="forgot-password text-right">
                Don't have an account? <Link to='/register'>Register</Link>
                </p>
                {accept && error && (
                  <p className='error' > Email is Not Found</p>
                )}
            </form></div></div></div>
  );
}