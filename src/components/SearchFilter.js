import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchFilter() {
  const [pokemon,setPokemon] = useState('');
  const [error,setError] = useState('');

  const navigate = useNavigate();

  function handleChange(e)
  {
    setError('');
    setPokemon(e.target.value);
  }

  function handleClick(e)
  {
    if(pokemon === '')
    {
      setError('Enter a pokemon');
    }
    else{
      setError('');
      navigate(`/pokemon/${pokemon.toLowerCase()}`);
    }
   
  }
  
  return (
    <div className='h-12 flex flex-col mb-2 items-center justify-center bg-gradient-to-b  from-cyan-500 to-white'>
       {/* search */}
        <div className='flex items-center justify-center'>
          <button onClick = {handleClick} className='flex items-center justify-center '>
            <img className='h-5 absolute translate-x-40' src="https://img.icons8.com/color/96/000000/search--v1.png" alt = ""/>
          </button>
         <input onChange={handleChange} value={pokemon} className='indent-5 mx-2 px-2 pr-6 rounded border-2 border-orange-200 shadow-md' placeholder = "Search Pokemon" type = "text"></input>
      
        </div>
        {<p className='text-red-500 text-xl'>{error}</p>}
    </div>
  )
}
