import React from 'react'
import { getgitusers } from '../assets'


const Navbar = () => {
  return (
    <div>
      <header className='p-5 flex justify-center items-center'>
        <nav className=' text-gitText rounded-xl p-5 bg-gitRealBlack'>
          <img src={getgitusers} alt="" className='w-36' />
        </nav>
      </header>
    </div>
  )
}

export default Navbar
