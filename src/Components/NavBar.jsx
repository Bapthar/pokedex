import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import genService from '../Services/genService';

const NavBar = () => {
  const [pokemonGens, setPokemonGens] = useState([]);

  useEffect(() => {
    const fetchPokemonGens = async () => {
      try {
        const response = await genService.getGens();
        setPokemonGens(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPokemonGens();
  }, []);

  return (
    <div className='nav'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="pok"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png"
              alt="Pokemon Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <NavDropdown title="Génération" id="basic-nav-dropdown">
                {pokemonGens.map((generation, index) => (
                  <NavDropdown.Item
                  className='navDown'
                    key={index}
                    href={`/generation/${generation.name}`}
                  >
                    {generation.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
