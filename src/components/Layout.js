import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import SearchFilter from './SearchFilter'


export default function Layout() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar/>
      <SearchFilter/>
      <Outlet/>
    </div>
  )
}
