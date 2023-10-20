import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import PokemonsDetails from './Components/PokemonsDetails';
import './App.css';
import GenPokemonsPage from './Pages/GenPage';
import VersionPokemonPage from './Pages/VersionPage';

function App() {
  return (
    <div>
      <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={"/pokemon/details"} element={<PokemonsDetails />}/>
        <Route path={'/generation/:generation'} element={<GenPokemonsPage />} />
        <Route path={'/versions/:versions'} element={<VersionPokemonPage />} />
      </Routes>
    </BrowserRouter>
    </div>
    )
}
export default App;


