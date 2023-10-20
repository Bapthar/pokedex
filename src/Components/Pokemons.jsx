import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import pokemonService from '../Services/pokemonService';
import PokemonDetails from './PokemonsDetails';
import '../App.css';

const Pokemon = ({ pokemon }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  const fetchPokemonById = async () => {
    try {
      const response = await pokemonService.getPokemonById(pokemon.url.substring(41).replaceAll("/", ""))
      setCurrentPokemon(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchPokemonById()
  }, []);

  const handleClick = () => {
    setShowDetails(!showDetails);
  }

  return (
    <div className='body'>
      <div id="shiny" className={`Carte hover-glo ${showDetails ? 'centered' : ''}`} onClick={handleClick}>
        {showDetails ? (
          <PokemonDetails pokemon={pokemon} />
        ) : (
          <div className='content'>
            <div className='titre'>
              #{currentPokemon.id} {currentPokemon.names != undefined && currentPokemon.names[4].name.charAt(0).toUpperCase() + currentPokemon.names[4].name.substring(1)}
            </div>
            <div className='pokemon'>
              <img className='image' variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemon.url.substr(41).replaceAll("/", "") + ".png"} alt={pokemon.name}></img>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Pokemon;
