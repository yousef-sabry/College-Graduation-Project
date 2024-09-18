import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import './profile.css';
import { Bookone } from '../Bookone/Bookone';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const Profile = () => {
  const [bookingData1, setBookingData1] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state;

  useEffect(() => {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
      setBookingData1(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (location.state) {
      const newData = Array.isArray(location.state) ? location.state : [location.state];
      setBookingData1((prevData) => {
        if (Array.isArray(prevData)) {
          return [...prevData, ...newData];
        } else {
          return newData;
        }
      });
      localStorage.setItem('profileData', JSON.stringify(bookingData));
    }
  }, [location]);
  const handleBack = () => {
    navigate('/');
  };
  return (
    <section className='profile'>
<h2 className="profile-title">Profile</h2>
    <div className="profile-container">
    <div className="profile-info" id="data-container">
    <h3 className='h1info'>Information</h3>
    <p> {bookingData?.doctorName}</p>
        <img className='imagedoctor' src={bookingData?.doctorImage} alt="Doctor Image" />
        <p > Adress: <span style={{color:"red"}}>{bookingData?.doctorDesc}</span>  </p>
        <h3 className='h1info'>Patient Information</h3>
        <p>Patient Name: {bookingData?.patientName}</p>
        <p>Patient Mobile: {bookingData?.patientMobile}</p>
        <p>Patient Email: {bookingData?.patientEmail}</p>
    </div>
       <button class="button" onClick={handleBack} >
    <svg
      viewBox="0 0 16 16"
      class="bi bi-lightning-charge-fill"
      fill="currentColor"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    ><path
  d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
  ></path> </svg
    >Back Home
  </button></div></section>
  );
};

export default Profile;




