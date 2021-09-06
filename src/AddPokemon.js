//import { Container } from 'postcss';
import React, { useState } from "react";
import {
  InputGroup,
  Container,
  Row,
  Col,
  FormControl,
  Button,
} from "react-bootstrap";

const AddPokemon = () => {
  const [pokeID, setPokeID] = useState(0);

  const AddP = () => {
    if (pokeID !== 0) {
      let listOfPokemons = JSON.parse(localStorage.getItem("mypokemons"));

      listOfPokemons.push({ id: parseInt(pokeID) });
      localStorage.setItem("mypokemons", JSON.stringify(listOfPokemons));
    } else {
      console.log("cannot add to Pokemon list");
    }
  };
  const handleChange = (event) => {
    setPokeID(event.target.value);
  };

  //useEffect(() =>{})
  return (
    <Container fluid>
      <Row>
        <Col>
          <InputGroup>
            <FormControl
              value={pokeID}
              key="kAddPokemonText"
              id="idAddPokemonText"
              onChange={handleChange}
              placeholder="Add Pokemon"
            />
            <Button key="kAddPokemonButton" variant="primary" onClick={AddP}>
              Add
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AddPokemon;
