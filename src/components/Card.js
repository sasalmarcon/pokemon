import React from 'react'

export default function Card(props) {
  return (
    <section className='text-gray-900 bg-gradient-to-br from-yellow-200 to-red-400 w-full rounded px-2 py-2 shadow-md'>
        <div className='bg-yellow-200 shadow-md'>
              
       
        {/* image */}
        <div className='bg-red-900 flex justify-center items-center h-1/3'>
           <img className = "h-40 "src = {props.image} alt = ""/>
        </div>
        {/* element */}
        <div className='bg-yellow-700 inline absolute -translate-y-3 '>
            <p className='text-gray-200 inline px-1'>FIRE</p>
        </div>
        {/* description */}
        <div className=''>
            <p className = "text-lg text-center my-2">{props.name}</p>
            <p className = "text-xs font-thin text-center">HP 200</p>
            <p className = "text-xs font-thin text-center">SPEED 200</p>
            <p className = "text-xs font-thin text-center">DEFENSE 200</p>
            <p className = "text-xs font-thin text-center">SPECIAL DEFENSE 200</p>
            <p className = "text-xs font-thin text-center">SPECIAL ATTACK 200</p>
        </div>
        {/* Ability */}
        <div className='flex justify-around items-center my-2'>
                {/* ability */}
                <div>
                    <p className='text-xs'>Ability</p>
                    <p className='text-sm'>Fire Attack</p>
                </div>
                {/* special ability */}
                <div>
                    <p className='text-xs'>Special Ability</p>
                    <p className='text-sm'>Fire Breathe</p>
                </div>
        </div>
        </div>
       
    </section>
  )
}
