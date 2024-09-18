import React from 'react'
import './dashboard.css'

import { Users } from '../User/Users'
import { Outlet } from 'react-router-dom'
import {Sidebar} from '../Sidebar/Sidebar'
import { Topbar } from '../Topbar/Topbar'


export const Dashboard = () => {
  return (
    <div  className='Dashboard'>
            <Topbar />
        <div className='DContainer' style={{marginTop:'1rem'}}>
            <Sidebar />
            <Outlet />
            {/* <User /> */}
        </div>
    </div>
  )
}
