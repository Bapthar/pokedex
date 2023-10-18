import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    )
}
export default App;