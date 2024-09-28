import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Homelayout() {
  return (
    <div className='min-h-screen mx-6 md:mx-20 lg:mx-40 '>
        <div class="dot-grid-background" />
        <Header />  
            <Outlet />
        <Footer />
     </div>

  )
}

export default Homelayout