import React, { useEffect, useState } from 'react';
import pokemonService from '../Services/pokemonService';
import Pokemons from '../Components/Pokemons';
import PaginationPerso from '../Components/PaginationPerso';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const PokemonsHome = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(21);
  const [totalPokemon, setTotalPokemon] = useState(0);
  const [maxPage, setMaxPage] = useState(20);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueAll, setSearchValueAll] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);


  const fetchPokemons = async () => {
    try {
        // pokemonPerPage * (currentPage - 1) ->  multiplie pokemone par page avec la pageCourante - 1 qui signifie que sur la page 1
        // on ferais 21 * (1 - 1)
        // sur la page 2 -> 21 * (2 - 1)
        let nombrePokemonAffiche = pokemonPerPage * (currentPage - 1)
        const response = await pokemonService.getPokemons(nombrePokemonAffiche, pokemonPerPage);
        setTotalPokemon(response.data.count)
        setMaxPage(Math.ceil((response.data.count / pokemonPerPage)))
        setPokemons(response.data.results)
        setPokemonsFiltered(response.data.results)
    } catch (e) {
        console.log(e)
    }
}

const fetchAllPokemon = async () => {
    try {
        const response = await pokemonService.getAllPokemons()
        return response.data;
    } catch (e) {
        console.log(e)
    }
}

const handleChange = (e) => {
    setSearchValue(e.currentTarget.value)
}
const handleChangeAll = (e) => {
    setSearchValueAll(e.currentTarget.value)
}
// useEffect(() => {
//     fetchPokemons();
// }, []);

useEffect(() => {
    fetchPokemons()
}, [currentPage]);

useEffect(() => {
    if (searchValue != null){
        let res = pokemons.filter(poke => {
            // return poke.name.includes(searchValue)
            return poke.name.startsWith(searchValue.toLowerCase())
        })
        setPokemonsFiltered(res)
    }
},[searchValue])

useEffect( () => {
    if (searchValueAll != null && searchValueAll != "") {
        let res;
        fetchAllPokemon().then(response => {
            res = response;
            let resFiltered = res.results.filter(poke => {
                // return poke.name.includes(searchValue)
                return poke.name.startsWith(searchValueAll.toLowerCase())
            })
            setPokemonsFiltered(resFiltered)
        });
    }else{
        fetchPokemons()
    }
}, [searchValueAll]);




  return <>
         <div className='recherche'>
          <div >
            Recherche sur tous les pokemons
            <input  value={searchValueAll} onChange={handleChangeAll}/>
          </div>
          <div >
            Recherche sur la Page Courante
            <input value={searchValue} onChange={handleChange}/>
          </div>
        </div>
    <div className={"d-flex flex-wrap justify-content-center gap-2"}>
        {pokemonsFiltered.map(pokemon =>{ 
          return <Pokemons key={pokemon.name} pokemon={pokemon}/>
        })}
      </div>
      <div className={"d-flex justify-content-center"}>
            <PaginationPerso currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage}/>
        </div>
      </>
  ;
}

export default PokemonsHome;