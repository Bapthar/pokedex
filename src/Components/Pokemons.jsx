import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


  function pokemon ({pokemon}) {
    return (
      <Card className={'col-3'}>
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>
            {pokemon.name}
            {pokemon.id}
            {pokemon.abilities}
          </Card.Text>
          <Link to="/HomePage/details" state={pokemon}><Button variant="info">Détails</Button></Link>
        </Card.Body>
      </Card>
    );
  }
export default pokemon ;