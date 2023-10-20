import React, { useEffect, useState } from 'react';
import pokemonService from '../Services/pokemonService';
import Pokemons from '../Components/Pokemons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const PokemonsHome = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try{
        const response = await pokemonService.getPokemons();
        setPokemons(response.data.results)
    }catch (e){
        console.log(e)
    }
}

useEffect(() => {
  fetchPokemons()
}, [])


  return <>
 
    <div className={"d-flex flex-wrap justify-content-center gap-2"}>
        {pokemons.map(pokemon =>{ 
          return <Pokemons key={pokemon.name} pokemon={pokemon}/>
        })}
      </div>
      </>
  ;
}

export default PokemonsHome;