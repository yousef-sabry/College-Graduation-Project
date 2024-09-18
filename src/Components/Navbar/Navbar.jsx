import React, { useEffect, useRef, useState } from 'react'
import './navbar.css'
import { Link ,useNavigate} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

    const nav = useNavigate()

    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 0); // Update on any scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    

    const token = localStorage.getItem('token')
    
    async function logOut(){
    localStorage.removeItem("token");
    nav('/login')

  }
    return (
        <div className={`Navbar ${isScrolled ? 'NavShadow' : 'NavbackPa'}`}>
            <div className={`navContainer ${isScrolled ? 'no-padding' : 'backPa'}`}>
                <div className='Nleft'>
                   
                    <Link spy={true} to='' smooth={true} activeClass="activeClass">
                        <img src='/images/sLogo.png' />
                    </Link>

                </div>
                <div className='Nright' ref={navRef}>
                    <ul>
                        <Link spy={true} to='' smooth={true} activeClass="activeClass" onClick={showNavbar}>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='/about' smooth={true} activeClass="activeClass" onClick={showNavbar}>
                            <li>About</li>
                        </Link>
                        <Link spy={true} to='/contact' smooth={true} activeClass="activeClass" onClick={showNavbar}>
                            <li>Contact Us</li>
                        </Link>
                        {/* <Link spy={true} to='/loading' smooth={true} activeClass="activeClass" onClick={showNavbar}>
                            <li>Loading Page</li>
                        </Link> */}
                     
                    </ul>



                    <div className='navLogin'>
                    {!token 
                    ? <>
                    <Link spy={true} to='/register' smooth={true} activeClass="activeClass" onClick={showNavbar} style={{ color: "white" }}>
                            <button className='StartBtn'>
                                Register
                            </button>
                        </Link>
                        <Link spy={true} to='/Login' smooth={true} activeClass="activeClass" onClick={showNavbar} style={{ color: "white" }}>
                            <button className='StartBtn' >
                                Login
                            </button>
                        </Link>
                    </>
                    :
                    <>
                            {/* <Link spy={true} to='/dashboard' smooth={true} activeClass="activeClass" onClick={showNavbar} style={{ color: "white"}}>
                            <button className='StartBtn' style={{width:"140px"}}>
                                Dashboard
                            </button>
                        </Link> */}
                        <Link spy={true} to='/profile' smooth={true} activeClass="activeClass" onClick={showNavbar} style={{ color: "white" }}>
                            <button className='StartBtn'>
                                Profile
                            </button>
                        </Link>
                            <button className='StartBtn' style={{padding:"4px 17px"}}  onClick={logOut}>
                                Log Out
                            </button>
                       
                    </>
                    }
                        
                        
                        <FontAwesomeIcon icon={faCircleXmark} className="nav-btn nav-close-btn" size="2x" style={{ color: 'rgb(3, 89, 89);' }} onClick={showNavbar} />
                    </div>
                  

                </div>

              
                <FontAwesomeIcon icon={faBars} className="nav-btn   " size="2x" style={{ color: 'rgb(3, 89, 89);' }} onClick={showNavbar} />



            </div>
        </div>
    )
}
