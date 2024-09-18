import React from 'react'
import './sabout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';


export const SAbout = () => {
  return (
    <div className='SAbout'>
        <div className='SAContainer'>
            <h2 style={{color:'black'}}>About Us </h2>
            <div className='SAContent'>
                <div className='SALeft'>
                    <p><FontAwesomeIcon icon={faMagnifyingGlass} color='rgb(50, 222, 222)' /> Search for (doctors, lawyers, or decoration Offices ) you want and 
                    the speciality you want and book with him</p>
                </div>
                <div className='SAMid'>
                    <p><FontAwesomeIcon icon={faStar} color='rgb(50, 222, 222)' /> Rating for all people from customers</p>
                </div>
                <div className='SARight'>
                    <p><FontAwesomeIcon icon={faBookMedical} color='rgb(50, 222, 222)' /> Book with us and pay at the clinic without any additional expenses</p>
                </div>
            </div>
        </div>
    </div>
  )
}
