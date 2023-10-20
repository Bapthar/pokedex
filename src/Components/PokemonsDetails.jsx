import React, { useState, useEffect } from 'react';
import pokemonService from '../Services/pokemonService';

const PokemonDetails = ({ pokemon }) => {
  const [stats, setStats] = useState([]);

  const fetchStats = async () => {
    try {
      const response = await pokemonService.getPokemonStats(pokemon.url);
      setStats(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchStats();
  }, [pokemon.url]);

  return (
    <div className="pokemon-details">
      <h2>Stats for {pokemon.name}</h2>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
