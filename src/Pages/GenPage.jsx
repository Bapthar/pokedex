import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import genService from '../Services/genService';
import GenPokemons from '../Components/GenPokemons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Pokemon from '../Components/Pokemons';

const GenPokemonsPage = () => {
  const { generation } = useParams();
  const [pokemonList, setPokemonList] = useState([]);

  const fetchGenPokemons = async () => {
    try {
      const response = await genService.getGenById(generation);
      console.log(response)
      setPokemonList(response.data.pokemon_species);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchGenPokemons();
  }, [generation]);

  return (
    <div className={"d-flex flex-wrap justify-content-center gap-2"}>
      {pokemonList.map(pokemon => { 
        return <Pokemon key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
}
  

export default GenPokemonsPage;
