import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import genService from '../Services/genService';
import versionPokemon from '../Services/versionPokemon';

const NavBar = () => {
  const [pokemonGens, setPokemonGens] = useState([]);
  const [pokemonVersions, setPokemonVersions] = useState([]);

  useEffect(() => {
    const fetchPokemonGens = async () => {
      try {
        const response = await genService.getGens();
        setPokemonGens(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };

  //   const uppercase = (string) => {
  //     let strCopy = string.split('-')
  //     let startString = strCopy[0];
  //     let endString = strCopy[1].toUpperCase()
  //     return startString.substring(0,1).toUpperCase()+startString.substring(1) + " " + endString
  // }

    fetchPokemonGens();
  }, []);

  useEffect(() => {
    const fetchpokemonVersions = async () => {
      try {
        const response = await versionPokemon.getVersions();
        setPokemonVersions(response.data.results);
      } catch (e) {
        console.log(e);
      }
    };

    fetchpokemonVersions(); 
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
          <Navbar.Toggle aria-controls="bg-body-tertiary" />
          <Navbar.Collapse id="bg-body-tertiary">
            <Nav className="ml-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <NavDropdown title="Générations" id="basic-nav-dropdown" className='navDown'>
                {pokemonGens.map((generation, index) => (
                  <NavDropdown.Item key={index} href={`/generation/${generation.name}`}>{(generation.name)}</NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Versions" id="basic-nav-dropdown" className='navDown'>
                {pokemonVersions.map((version, index) => (
                  <NavDropdown.Item key={index} href={`/versions/${version.name}`}>{version.name}</NavDropdown.Item>
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
