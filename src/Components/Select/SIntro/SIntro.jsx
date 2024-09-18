import React from 'react'
import './sintro.css'
export const SIntro = ({data}) => {
  const bgImage = {
    background: `url(${data.bgImg})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    objectfit:"cover",
    backgroundrepeat: "no-repeat"
  };

  console.log(data)
  return (
    <div className='SIntro' style={bgImage}>
      <div className='IntroContainer'>
         <h1 style={{color:"rgb(3, 89, 89)"}}>
         Good, You have chosen the right field 
         for you according to Dalily.</h1>
        <h2 style={{color:"rgb(3, 89, 89)"}}>what you are looking for</h2> 
         <div className='SIntroTab' >
        <p style={{color:"rgb(3, 89, 89)" , fontSize:"30px" , fontWeight:"500"}}>{data.text}</p>
        </div></div></div>
  )
}
