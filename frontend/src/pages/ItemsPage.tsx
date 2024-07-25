import React from 'react'
import { Outlet } from 'react-router'

const ItemsPage = () => {
  
  return (
    <div className='md:w-full h-[calc(100svh-123px)]  md:h-auto'>
      <Outlet/>
    </div>
  )
}

export default ItemsPage