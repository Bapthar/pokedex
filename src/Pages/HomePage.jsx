import React, { useEffect, useState } from 'react';
import Pokemon from '../Services/Pokemon';
import Pokemons from '../Components/Pokemons';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemons = async () => {
    try{
        const response = await Pokemon.getPokemons();
        setPokemon(response.data.results)
    }catch (e){
        console.log(e)
    }
}

useEffect(() => {
  fetchPokemons()
}, [])

  return (
    <div className={"d-flex justify-content-center gap-2"}>
      <h1>Liste de Pokémon</h1>
        {pokemon.map(pokemon =>{
          return <Pokemons pokemon={pokemon}/>
        })}
      </div>

  );
}

export default HomePage;