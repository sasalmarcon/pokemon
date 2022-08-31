import React from 'react'

export default function Card(props) {
    let FROM = '';
    let TO = '';
    let TYPE = '';
    let BACKGROUND = '';
    let BACKGROUND2 = '';
    switch(props.type)
    {
        case 'fire':
            FROM = 'from-orange-500';
            TO = 'to-yellow-500';
            TYPE = 'bg-red-800'
            BACKGROUND = 'bg-red-200';
            BACKGROUND2 = 'bg-red-100';
            break;
        case 'water':
            FROM = 'from-blue-400';
            TO = 'to-cyan-200';
            TYPE = 'bg-cyan-800'
            BACKGROUND = 'bg-blue-200';
            BACKGROUND2 = 'bg-blue-100';
            break;
        case 'grass':
            FROM = 'from-green-400';
            TO = 'to-cyan-200';
            TYPE = 'bg-green-700'
            BACKGROUND = 'bg-green-200';
            BACKGROUND2 = 'bg-green-100';
            break;
        case 'electric':
            break;
        case 'psychic':
            break;
        case 'ice':
            break;
        case 'dragon':
            break;
        case 'dark':
            break;
        case 'fairy':
            break;
        default:
             FROM = 'from-gray-500';
             TO = 'to-gray-200';
             TYPE = 'bg-gray-700'
             BACKGROUND = 'bg-gray-200';
             BACKGROUND2 = 'bg-gray-100';
            break;
        }
  return (
    <section className = {`text-gray-900 bg-gradient-to-br ${FROM} ${TO} w-full rounded px-2 py-2 shadow-md`}>
        <div className= {`${BACKGROUND2} shadow-md`}>
              
       
        {/* image */}
        <div className = {`${BACKGROUND} flex justify-center items-center h-1/3`}>
           <img className = "h-40 "src = {props.image} alt = ""/>
        </div>
        {/* element */}
        <div className = {`${TYPE} inline absolute -translate-y-3`}>
            <p className='text-gray-200 inline px-1'>{props.type}</p>
        </div>
        {/* description */}
        <div className=''>
            <p className = "text-lg text-center my-2">{props.name}</p>
            <p className = "text-xs font-thin text-center">HP {props.hp}</p>
            <p className = "text-xs font-thin text-center">SPEED {props.speed}</p>
            <p className = "text-xs font-thin text-center">DEFENSE {props.defense}</p>
            <p className = "text-xs font-thin text-center">SPECIAL DEFENSE {props.specialDefense}</p>
            <p className = "text-xs font-thin text-center">SPECIAL ATTACK {props.specialAttack}</p>
        </div>
        {/* Ability */}
        <div className='flex justify-around items-center my-2'>
                {/* ability */}
                <div>
                    <p className='text-xs'>Ability</p>
                    <p className='text-sm'>{props.ability}</p>
                </div>
                {/* special ability */}
                <div>
                    <p className='text-xs'>Special Ability</p>
                    <p className='text-sm'>{props.specialAbility}</p>
                </div>
        </div>
        </div>
       
    </section>
  )
}
