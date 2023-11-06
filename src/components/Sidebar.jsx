import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className='w-full h-screen z-50 shadow-lg fixed right-0 top-[5rem] transition-all delay-500 bg-white md:mx-9 md:w-[20%] md:h-[70%]'>
            <ul className='p-10 '>
                <li className='py-4 text-primary'><NavLink to={'/'}><span className='font:bold hover:border-b-4 transition-all border-secondary'>Home</span> </NavLink> </li>
                <li className='py-4 text-primary'><NavLink to={'/blogs'}><span className='font:bold hover:border-b-4 transition-all border-secondary'>Blogs</span> </NavLink> </li>
                <li className='py-4 text-primary'><NavLink to={'/resume'}><span className='font:bold hover:border-b-4 transition-all border-secondary'>Resume</span> </NavLink> </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar