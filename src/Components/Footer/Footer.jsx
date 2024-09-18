import React from 'react'
import './footer.css'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'



export const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Fcontainer'>
        <img  src='/images/sLogo.png'/>
            <div className='FContent'>
                <div className='FLeft'>
                    <h5> About Us</h5>
                    <p>Our Team</p>
                    <p>Our Team</p>
                </div>
                <div className='FLMid'>
                    <h5> Searched By</h5>
                    <p>Specialization</p>
                    <p>City</p>
                    <p>Area</p>
                </div>
                <div className='FRMid'>
                    <h5>Do you want to join us ?</h5>
                    <p>Join our team now</p>
                </div>
                <div className='FRight'>
                    <h5>Contact Us</h5>
                    <div className='FIcons'>
                        <Facebook size='50px' color={'#4267B2'} className='icon'/>
                        <Instagram size='50px' color={'#E1306C'} className='icon'/>
                        <Twitter size='50px'  color={'#1DA1F2'} className='icon'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Footer;