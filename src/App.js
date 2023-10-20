import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';
import PokemonsDetails from './Components/PokemonsDetails';
import './App.css';
import GenPokemonsPage from './Pages/GenPage';

function App() {
  return (
    <div>
      <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/generation/:generation'} element={<GenPokemonsPage />} />
      </Routes>
    </BrowserRouter>
    </div>
    )
}
export default App;






