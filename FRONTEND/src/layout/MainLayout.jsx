import React from 'react'
import Navbar from '../feature/ootasty/ui/components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div  className='px-8 py-5 bg-[var(--secondary-color)] h-screen w-full'>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}

export default MainLayout
