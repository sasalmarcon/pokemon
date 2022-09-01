import React,{ useContext, useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import Card from './Card';
import { PokemonContext } from '../App';
import apiCall from '../services/apiCall';



export default function ShowPokemons() {
    const pokemonContext = useContext(PokemonContext);
    const [currentPage,setCurrentPage] = useState(1);
    const [pokemon,setPokemon] = useState([]);
    const [loading,setLoading] = useState(false);
    
    console.log(pokemon)
    function pageHandler(e)
    {
        // Pagination
        switch(e.target.id)
        {
            case 'first':
                setLoading(true);
                setPokemon([]);
                setCurrentPage(1);
                return pokemonContext.pokemonDispatch({type:'NEXT',url:"https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"});        
            case 'last':
                setLoading(true);
                setPokemon([]);
                setCurrentPage(58);
               return pokemonContext.pokemonDispatch({type:'NEXT',url:"https://pokeapi.co/api/v2/pokemon?offset=1140&limit=20"});
            case 'next':
                setLoading(true);
                setCurrentPage(prev=>{
                    if(prev >= 58) return 58;
                    else 
                    return prev + 1
                });
                pokemonContext.pokemonDispatch({type:'NEXT',url:pokemonContext.pokemonState.next});
                break;
            case 'prev':
                setLoading(true);
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
                 const poke = async()=>{
                    const promises = pokemonContext.pokemonState.results.map(poke=>apiCall(poke.url));
                    const result = await Promise.all(promises);
                    return result;
                } 

                poke().then(value => {
                    setPokemon(value)
                    setLoading(false);
                });
              
           
            

    },[pokemonContext.pokemonState.results]);
    
         const cards =  pokemonContext.pokemonState.results.map(poke =>{
         let index =  pokemonContext.pokemonState.results.indexOf(poke);
         let image = 'official-artwork';
         if(pokemon.length > 0 && loading === false)
         {
            if(pokemon[index].sprites.other['official-artwork'].front_default === null)
            {
               image = 'dream_world';
            }
            if(pokemon[index].sprites.other['home'].front_default === null){
                image = 'official-artwork';
              }
           if(pokemon[index].sprites.other['dream_world'].front_default === null)
           {
               image ='home';
           }
          
         }
        
        return (
            <React.Fragment key={nanoid()}>
            {!loading && <Card key = {poke.name}
                               name = {poke.name}
                               image = {pokemon.length > 0 ? pokemon[index].sprites.other[`${image}`].front_default:''}
                               type = {pokemon.length > 0 ? pokemon[index].types[0].type.name:''}
                               hp = {pokemon.length > 0 ? pokemon[index].stats[0].base_stat:''}
                               attack = {pokemon.length > 0 ? pokemon[index].stats[1].base_stat:''}
                               specialAttack = {pokemon.length > 0 ? pokemon[index].stats[3].base_stat:''}
                               defense = {pokemon.length > 0 ? pokemon[index].stats[2].base_stat:''}
                               speed = {pokemon.length > 0 ? pokemon[index].stats[5].base_stat:''}
                               specialDefense = {pokemon.length > 0 ? pokemon[index].stats[4].base_stat:''}
                               ability = {pokemon.length > 0  && pokemon[index].abilities.length > 0 ? pokemon[index].abilities[0].ability.name:'none'}
                               specialAbility = {pokemon.length > 0 && pokemon[index].abilities.length > 1 ? pokemon[index].abilities[1].ability.name:'none'}
            />}
            </React.Fragment>
            
        )
       })
  
   
  return (
    <>
    <div className='grid grid-cols-2 gap-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {cards}
    </div>
    {/* Pagination */}
    <div className='flex items-center justify-center w-screen fixed bottom-0'>
        <button disabled = {loading || currentPage === 1} onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = "first">First</button>
        <button disabled = {loading || currentPage === 1} onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = "prev">Prev</button>
        <p className='mx-2 bg-green-500 px-2 py-1 rounded'>{currentPage}/{58}</p>
        <button disabled = {loading || currentPage === 58 } onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = "next">Next</button>
        <button disabled = {loading || currentPage === 58} onClick = {pageHandler} className='bg-yellow-500 px-2 mx-2' id = 'last'>Last</button>
        </div>
    </>
    
  )
}
