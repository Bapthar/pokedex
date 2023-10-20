import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import genService from '../Services/genService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Pokemon from '../Components/Pokemons';
import versionPokemon from '../Services/versionPokemon';


const VersionPokemonPage = () => {
  const { versions } = useParams();
  const [pokemons, setPokemons] = useState([])

  const fetchVersionById = async () => {
    try {
      const response = await versionPokemon.getVersionsById(versions);
      const versionGroupe = await fetchVersionGroupeById(response.data.version_group.name)
      await fetchPokemonByGeneration(versionGroupe);
    } catch (e) {
      console.log(e);
    }
  }

  const fetchVersionGroupeById = async (groupeVersion) => {
    try {
        const response = await versionPokemon.getVersionsGroupeById(groupeVersion)
        return response.data.generation.name
    } catch (e) {
        console.log(e);
      }
    }


const fetchPokemonByGeneration = async (generation) => {
    try{
        const response = await genService.getGenById(generation)
        setPokemons(response.data.pokemon_species)
    } catch (e) {
        console.log(e)
        }
    }


  useEffect(() => {
    fetchVersionById();
  }, []);

  return (
    <div className={"d-flex flex-wrap justify-content-center gap-2"}>
      {pokemons.map(pokemon => { 
        return <Pokemon key={pokemon.name} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default VersionPokemonPage;
