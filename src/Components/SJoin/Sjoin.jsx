import React from 'react'
import './sjoin.css'
import { Link } from 'react-router-dom'

export const Sjoin = () => {

  return (
    <div className='Sjoin'>
        <div className='SJContainer'>
            <div className='SJLeft'>
                <h3>Would you like to join us</h3>
                <p>if you would like to join us and benefit from<br/>
                    our services, do not hesitate and <br/>
                    start registering now 
                </p>
                <button>  Register</button>
            </div>
            <div className='SJRight'>
                <img src='https://img.freepik.com/free-photo/man-beachwear-pointing-sidewards_23-2147639743.jpg?t=st=1709772567~exp=1709776167~hmac=ccf682c4fb06229300306889641b1f09b00113117467d77d37091f340f139328&w=996'/>
            </div>
        </div>
    </div>
  )
}
