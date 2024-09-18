// src/CardSwiper.js
import React from 'react';
import './swiper.css'
import SwipeableViews from 'react-swipeable-views';
import UilTwitter from '@iconscout/react-unicons/icons/uil-twitter';
import UilInstagram from '@iconscout/react-unicons/icons/uil-instagram';
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook';
import { Link, useNavigate } from 'react-router-dom';




const styles = {
  swipeContainer: {
    width: '100%', 
    display: 'flex',
    flexDirection: 'row',

  },
  slide: {
    flex: '20%', 
    padding: 15,

    minHeight: 100,
    color: '#fff',
    boxSizing: 'border-box',

  },
  
  

};



  
  const Swiper = ({ items }) => {
  const navigate = useNavigate();
  console.log(items)
  return (<>

  <SwipeableViews enableMouseEvents >
    <div style={styles.swipeContainer} className='react-swipeable-view-container horizontal-scroll-container'> {/* This div acts as a container for the 4 slides */}
      {items.map((item, index) => (
        
        <div style={{ ...styles.slide }}>
          <div className='card' style={{ width: "20vw"  }} >
          
            <img src={item.image} />
            <p>{item.text}</p>
           <div className='MainCardDesc'>
              <p>{item.desc}
              </p>
              
              
              </div>
            <div className='MainCardIcons'>
              <UilFacebook size='30px' color={'#4267B2'} style={{}} className='icon Ficon' />
              <UilInstagram size='30px' color={'#E1306C'} className='icon Iicon' />
              <UilTwitter size='30px' color={'#1DA1F2'} className='icon Ticon' />
            </div>

            <button className='Explore' onClick={()=>navigate('/select', { state: item })} >Explore</button>
       

        
          </div>

        </div>
      ))}


    </div>


  </SwipeableViews>
  </>)
};

export default Swiper;
