import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex items-center bg-gradient-to-b from-cyan-900 to-cyan-500'>
        <div className='mx-2 flex items-center'>
        <img className='h-10' src="https://img.icons8.com/color/96/000000/pokeball-2.png" alt = ""/>
            <p className='text-gray-200 text-xl'>Pokemon</p>
        </div>
    </nav>
  )
}
