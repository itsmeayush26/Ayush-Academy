import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
    <Navbar/>
    <div className='flex-1 flex-col min-h-screen'>
        <Outlet/>
    </div>
    </div>
  )
}

export default MainLayout