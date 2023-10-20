import axios from "axios";

function getVersions(){
    return axios.get("https://pokeapi.co/api/v2/version?limit=100")
}

function getVersionsById(id){
    return axios.get("https://pokeapi.co/api/v2/version/"+id)
}

function getVersionsGroupeById(name){
    return axios.get("https://pokeapi.co/api/v2/version-group/"+name)
}

function getGenerationsByVersionId(versionId){
    return axios.get(`https://pokeapi.co/api/v2/version/${versionId}`)
}

export default {
    getVersions,
    getVersionsById,
    getVersionsGroupeById,
    getGenerationsByVersionId
}