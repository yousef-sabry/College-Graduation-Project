import React, { useEffect } from 'react'
import { SIntro } from '../SIntro/SIntro'
import { SCard } from '../SCard/SCard'
import { useLocation } from 'react-router-dom';

export const SMain = () => {
  const location = useLocation();
  const recData = location.state;
  console.log(recData)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className='SMain'>
        <SIntro  data={recData}/>

        <SCard data={recData}/>
    </div> 
  )
}
