import React, { useState, useEffect } from 'react';
import genService from '../Services/genService';
import '../App.css';

const GenPokemons = ({ generation }) => {
  const [generationPokemonList, setGenerationPokemonList] = useState([]);

  const fetchGenerationPokemonList = async () => {
    try {
      const response = await genService.getGenById(generation);
      setGenerationPokemonList(response.data.pokemon_species);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchGenerationPokemonList();
  }, [generation]);

  return (
    <>
      <div className='body'>
        {generationPokemonList.map((pokemon, index) => (
          <div className='Carte hover-glow' key={index}>
            <div className='content'>
              <div className='titre'>
              #{generationPokemonList.id} {generationPokemonList.names != undefined && generationPokemonList.names[4].name.charAt(0).toUpperCase() + generationPokemonList.names[4].name.substring(1)}
              </div>
              <div className='pokemon'>
                <img className='image' variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemon.url.substr(-3).replaceAll("/","") + ".png"}></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenPokemons;
