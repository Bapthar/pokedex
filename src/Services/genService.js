import axios from "axios";

function getGens(){
    return axios.get("https://pokeapi.co/api/v2/generation")
}

function getGenById(id){
    return axios.get("https://pokeapi.co/api/v2/generation/"+id)
}


export default {
    getGens,
    getGenById
}