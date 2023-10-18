import axios from "axios";

function getPokemons(){
    return axios.get("https://pokeapi.co/api/v2/pokemon")
}

export default {
    getPokemons
}