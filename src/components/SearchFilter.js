import React from 'react'

export default function SearchFilter() {
  return (
    <div className='h-12 flex items-center bg-gradient-to-b  from-cyan-500 to-white'>
       {/* search */}
        <div className='flex items-center'>
        <img className='h-5 absolute translate-x-3' src="https://img.icons8.com/color/96/000000/search--v1.png" alt = ""/>
        <input className='indent-5 mx-2 px-2 rounded border-2 border-orange-200 shadow-md' placeholder = "Search Pokemon" type = "text"></input>
        </div>
      
    </div>
  )
}
