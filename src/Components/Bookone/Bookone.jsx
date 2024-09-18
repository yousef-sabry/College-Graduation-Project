import React, { useEffect,useState } from 'react'
import './bookone.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Profile from '../Profile/Profile';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Bookone = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [doctorName, setDoctorName] = useState('');
  const location = useLocation();
  const receivedData = location.state;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  const userId = localStorage.getItem('userId')
  // Submit
async function Submit(e){
  e.preventDefault()
  try {
    let res = await axios.post("https://localhost:7198/api/Doctors", {
      id:userId,
      name: name,
      moible: mobile,
      email: email,
    }).then(res => console.log(res))
    .catch(err => console.log(err)) 
  } catch (error) {
    console.log(error)
  }
}
const handleSubmit = async (e) => {
  e.preventDefault();
  const bookingData = {
    doctorName: receivedData.name,
    doctorImage: receivedData.perImg,
    doctorDesc: receivedData.desc,
    patientName: name,
    patientMobile: mobile,
    patientEmail: email,
  };
  navigate('/profile', { state: bookingData });
};
  return (
    <div className='Bookone'>
      <div className='BOContainer'>
        <div className='BOLeft'>
          <h2>Booking details</h2>
          <div className='BODetails'>
            <div className='BOUp'>
              <div className='BOULeft'>
                <img src={receivedData.perImg}  />
              </div>
              <div className='BOURight'>
                <h3>Dr/ {receivedData.name}  </h3>
                <p style={{width:'50%', marginLeft:'12rem'}}>{receivedData.desc}</p>  
              </div></div> </div>
          <div className='BODown'>
            <FontAwesomeIcon icon={faClock} style={{color:'royalblue'}} />
              <p style={{display:'inline',lineHeight:'1.5'}}>Tomorrow 17 December From 4:00 PM to 10:00 PM</p>
              </div>
        </div>
        <div className='BORight'>
        <h2>Booking Information</h2><form onSubmit={Submit}>
          <Form.Label htmlFor="Name" className='form-label'>Patient Name</Form.Label>
          <Form.Control
      type="text"id="Name" aria-describedby="passwordHelpBlock"
    className='formInput mb-4'value={name}
              onChange={(e) => setName(e.target.value)}required
            />
            <Form.Label htmlFor="mobile" className='form-label'>Mobile Number</Form.Label>
            <Form.Control
              type="text"id="mobile"
              aria-describedby="passwordHelpBlock"className='formInput mb-4'
              value={mobile}onChange={(e) => setMobile(e.target.value)}
              required
            />
            <Form.Label htmlFor="lastName" className='form-label'>E-mail</Form.Label>
            <Form.Control
              type="email " id="lastName"
              aria-describedby="passwordHelpBlock" className='formInput mb-4'
              value={email} onChange={(e) => setEmail(e.target.value)}
              required
            />

          <Form.Label htmlFor="Name" className='form-label'>Comment</Form.Label>
          <Form.Control
          type="text"id="Name" aria-describedby="passwordHelpBlock"
          className='formInput mb-4'
            />

            
            
            <div>
            <Button onClick={handleSubmit} variant="success" type="submit" style={{ alignSelf: 'center' , width:'150px' }} className='submitBtn'><Link to='/profile' style={{color:"white"}}>Submit</Link></Button>
            </div></form></div></div></div>
  )
}
