import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UpdateUser = () => {
    
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [passwordR ,setPasswordR] = useState("")
    const [accept ,setAccept] = useState(false)


    const id = window.location.pathname.split('/').slice(-1)[0]

    useEffect(()=>{
        fetch(`https://localhost:7198/api/User/showbyid/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setName(data[0].name)
            setEmail(data[0].email)  
                
        })
    },[])
   async  function Submit (e){
      let flag = true;
        e.preventDefault()
        setAccept(true)
      //   if(name === ""|| password.length <8 || passwordR !== password){
      //     flag = false
      // } else{
      //   let  res =axios.post("http://127.0.0.1:8000/api/register",{
      //     name:name,
      //     email:email,
      //     password:password,
      //     password_confirmation:passwordR,

      //   })
      //   .then((res)=>console.log(res))
      // }
        if(name === ""|| password.length <8 || passwordR !== password){
            flag = false
        } else flag = true

        try {
            if(flag){
          let  res =  await axios.post(`https://localhost:7198/api/user/update/${id}`,{
            name:name,
            email:email,
            password:password,
            password_confirmation:passwordR,

          })
     
          if (res.status === 200) {
            try {
              localStorage.setItem('email', email);
          
              window.location.pathname = '/dashboard/users';
            } catch (error) {
              console.error('Error storing email in local storage:', error);
            }}
        }
        } catch (error) {
        //   setEmailError(error.response.status)
          console.log(error)
        }
      
    } 
  return (
    <div className='UpdateUser'>
 <form onSubmit={Submit} style={{display:'flex',flexDirection:'column',width:'60vw',margin:'5rem auto',gap:'1rem'}}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        // name="name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />
       {name === ''  && accept&& <p  className='error'>UserName is required</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        // name="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />
      
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        // name="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required
      />
      {password.length <8 && accept&& <p className='error'>Please Enter Password more than 6</p>}
        <label htmlFor="passwordR">Retype Password</label>
      <input
        type="password"
        id="passwordR"
        // name="password"
        value={passwordR}
        onChange={(e)=>setPasswordR(e.target.value)}
        required
      />
      {passwordR !== password  && accept&& <p className='error'>Passwords are different</p>}

      <button type="submit">Sign Up</button>
    </form>    </div>
  )
}
