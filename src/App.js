import React, { useEffect, useReducer } from 'react';
import apiCall from './services/apiCall';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import ShowPokemons from './components/ShowPokemons';
import Pokemon from './components/Pokemon';
import ParticlesBg from 'particles-bg';

export const PokemonContext = React.createContext();

const initialState = {url:'https://pokeapi.co/api/v2/pokemon',results:[]};
const reducer = (state,action)=>{
  switch(action.type){
    case "FETCH_DATA":
      return {...state,...action.value};
    case "NEXT":
      return {...state,url:action.url}
      case "PREV":
        return {...state,url:action.url}
        case "LAST":
          return {...state,url:action.url};
        case "FIRST":
        return {...state,url:action.url}
    default:
      return state;

  }
}



function App() {
  const [pokemonData,dispatch] = useReducer(reducer,initialState);
  // config
  
 
  // api call
  useEffect(()=>{
  
    apiCall(pokemonData.url).then(data =>{
      dispatch({type:'FETCH_DATA',value:data});
    })
    return ()=>{}
  },[pokemonData.url]);

  



  return (
    <PokemonContext.Provider value = {{pokemonState:pokemonData,pokemonDispatch:dispatch}}>
    <div className="">
      <Routes>
          <Route path = "/" element = {<Layout/>}>
            <Route index element = {<ShowPokemons/>}/>
            <Route path = "/pokemon/:id" element = {<Pokemon/>}/>
          </Route>
      </Routes>
    </div>
    <ParticlesBg type="random"   bg={true} />
    </PokemonContext.Provider>
  );
}

export default App;
