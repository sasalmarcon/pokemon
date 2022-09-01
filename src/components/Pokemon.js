import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link, useParams } from 'react-router-dom';
import apiCall from '../services/apiCall';
import { nanoid } from 'nanoid';



export default function Pokemon() {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState({});
    const [error,setError] = useState('');
    const { id } = useParams();
    useEffect(()=>{
        setLoading(true);
        setError('');
            apiCall(`https://pokeapi.co/api/v2/pokemon/${id}`).then(value =>{    
                setData(value)
                setLoading(false);
            }).catch(err =>{
                setError('Enter a valid Pokemon');
            });
       
   
    },[id])
  return (
        <div className=' grow flex items-center justify-center'>
            
            <div className='h-full w-full flex items-center justify-center sm:w-1/3'>
            <p className='text-xl text-red-500 font-bold'>{error}</p>
            {!loading && <Card key = {nanoid()}
                                name = {data.species.name}
                               image = {data.sprites.other.dream_world.front_default}
                               type = {data.types[0].type.name}
                               hp = {data.stats[0].base_stat}
                               attack = {data.stats[1].base_stat}
                               specialAttack = {data.stats[3].base_stat}
                               defense = {data.stats[2].base_stat}
                               speed = {data.stats[5].base_stat}
                               specialDefense = {data.stats[4].base_stat}
                               ability = {data.abilities.length > 0 ? data.abilities[0].ability.name:'none'}
                               specialAbility = {data.abilities.length > 1 ? data.abilities[1].ability.name:'none'}/>}
            </div>
                        <Link to = '/' className='bg-blue-800 text-white px-2 py-2 rounded fixed bottom-2 left-2'>Go Back</Link>
        </div>
  )
}
