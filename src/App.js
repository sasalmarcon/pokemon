import React, { useEffect, useReducer } from 'react';
import apiCall from './services/apiCall';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import ShowPokemons from './components/ShowPokemons';

export const PokemonContext = React.createContext();

const initialState = {url:'https://pokeapi.co/api/v2/pokemon',results:[]};
const reducer = (state,action)=>{
  switch(action.type){
    case "FETCH_DATA":
      return {...state,...action.value};
    case "NEXT":
      if(action.url === null)
        {
          return {...state};
        }
      return {...state,url:action.url}
      case "PREV":
        if(action.url === null)
        {
          return {...state};
        }
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
  
 
  // api call
  useEffect(()=>{
  
    apiCall(pokemonData.url).then(data =>{
      dispatch({type:'FETCH_DATA',value:data});
    })
    return ()=>{}
  },[pokemonData.url]);

  

  console.log(pokemonData);

  return (
    <PokemonContext.Provider value = {{pokemonState:pokemonData,pokemonDispatch:dispatch}}>
    <div className="App">
      <Routes>
          <Route path = "/" element = {<Layout/>}>
            <Route index element = {<ShowPokemons/>}/>
          </Route>
      </Routes>
    </div>
    </PokemonContext.Provider>
  );
}

export default App;
