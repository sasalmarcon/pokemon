import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex items-center bg-gradient-to-b from-cyan-900 to-cyan-500'>
        <div className='mx-2 flex items-center'>
        <img className='h-10' src="https://img.icons8.com/color/96/000000/pokeball-2.png" alt = ""/>
           <Link to = "/" className='text-gray-200 text-xl'>Pokemon</Link>
        </div>
    </nav>
  )
}
