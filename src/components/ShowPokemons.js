import React,{ useContext, useEffect, useState } from 'react';
import Card from './Card';
import { PokemonContext } from '../App';
import apiCall from '../services/apiCall';



export default function ShowPokemons() {
    const pokemonContext = useContext(PokemonContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [pokemon,setPokemon] = useState([]);
    
    console.log(pokemon)
    function pageHandler(e)
    {
        // Pagination
        switch(e.target.id)
        {
            case 'first':
                setCurrentPage(1);
                pokemonContext.pokemonDispatch({type:'NEXT',url:"https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"});
                break;
            case 'last':
                setCurrentPage(115);
                pokemonContext.pokemonDispatch({type:'NEXT',url:"https://pokeapi.co/api/v2/pokemon?offset=1134&limit=20"});
                break;
            case 'next':
              
                setCurrentPage(prev=>{
                    if(prev >= 115) return 115;
                    else 
                    return prev + 1
                });
                pokemonContext.pokemonDispatch({type:'NEXT',url:pokemonContext.pokemonState.next});
                break;
            case 'prev':
               
                setCurrentPage(prev=>{
                    if(prev <= 1) return 1;
                    else 
                    return prev-1;
                });
                pokemonContext.pokemonDispatch({type:'PREV',url:pokemonContext.pokemonState.previous});
                break;

            default:
                return;
        }
    }
    
    useEffect(()=>{
            pokemonContext.pokemonState.results.forEach(poke =>{
                apiCall(poke.url).then(value=>{
                setPokemon(prev => ([...prev,value]));
               })
            })
           
            

    },[pokemonContext.pokemonState.results]);
    
         const cards =  pokemonContext.pokemonState.results.map(poke =>{
    
        return (
            <Card name = {poke.name}
                  image = ""
                   />
        )
       })
  
   
  return (
    <>
    <div className='grid grid-cols-2 gap-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {cards}
    </div>
    {/* Pagination */}
    <div className='border-2 flex items-center justify-center w-screen fixed bottom-0'>
        <button onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = "first">First</button>
        <button onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = "prev">Prev</button>
        <p className='mx-2 bg-green-500 px-2 py-1 rounded'>{currentPage}/{115}</p>
        <button onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = "next">Next</button>
        <button onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = 'last'>Last</button>
        </div>
    </>
    
  )
}
