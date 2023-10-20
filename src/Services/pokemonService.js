import axios from "axios";

function getPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species?limit=500")
}

function getPokemonById(id){
    return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+id)
}

export default {
    getPokemons,
    getPokemonById
}

