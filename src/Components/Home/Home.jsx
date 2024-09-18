import React from 'react'
import { Intro } from '../Intro/Intro'
import { Booking } from '../Booking/Booking'
import { Sjoin } from '../SJoin/Sjoin'
import { SAbout } from '../SAbout/SAbout'

export const Home = () => {
  return (
    <div>
    <Intro />
    <Booking />
    <Sjoin />
    <SAbout />
    </div>
  )
}
