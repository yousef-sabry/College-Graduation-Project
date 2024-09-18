import React from 'react'
import './sidebar.css'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='Sidebar'>
    <div className='SContainer'>  
        <NavLink  to='/dashboard/users' className='item-link'>Users</NavLink>
        <NavLink  to='/dashboard/user/create' className='item-link'>New User</NavLink>

        </div>
    </div>
  )
}
