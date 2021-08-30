//import { Container } from 'postcss';
import React, { useState, useEffect } from 'react';
import { InputGroup,Container,Row,Col,FormControl,Button } from 'react-bootstrap';

const AddPokemon = () =>
{
 //const [isLoading, setLoading] = useState(true);
 //const [pokemon, setPokemon] = useState();
 //const [pokemonStats, setPokemonStats] = useState();

// useEffect(() => {
//   console.log(pokeID)
//   //axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeID).then(response => {
//     //console.log(response.data.types);
//     setPokemon(response.data);
//     setPokemonType(response.data.types);
//     setPokemonStats(response.data.stats);
//     setLoading(false);
//   });
// },[]);

// if (isLoading) {
//   return <div className="App">Loading...</div>;
// }

return (
    <Container fluid>
        <Row>
            <Col>
            <InputGroup>
                <FormControl
                    placeholder="Add Pokemon"
                 />
                 <Button variant="primary">
                     Add
                 </Button>
            </InputGroup>
            </Col>
        </Row>
    </Container>
  
  
);


}

export default AddPokemon;