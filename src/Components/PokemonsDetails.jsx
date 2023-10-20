import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import pokemonService from "../Services/pokemonService";



const PokemonDetails = () => {
    const location = useLocation()
    const [pokemon, setPokemon] = useState({});

    const fetchPokemonById = async () => {
        try {
            const res = await pokemonService.getPokemonByIdBis(location.state.id)
            setPokemon({...location.state, pokemon : res.data})
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPokemonById()
    }, []);

    return <div>
        <div className={"text-center"}>
            <h4 className={"text-white p-3"}>Taille</h4>
            <p>{pokemon.pokemon.height}</p>
            <h4 className={"text-white p-3"}>Poids</h4>
            <p>{pokemon.pokemon.weight}</p>
        </div>
        <div className={"text-center"}>
            <h4 className={"text-white p-3"}>Catégories</h4>
            <p>{pokemon.genera[3].genus}</p>
            <h4 className={"text-white p-3"}>Habitat</h4>
            <p>{pokemon.habitat.name}</p>
        </div>
    </div>;
};

export default PokemonDetails;
