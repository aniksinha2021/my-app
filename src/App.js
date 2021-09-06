import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
//import AddPokemon from "./AddPokemon";
//import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
  InputGroup,
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [pokemons, setPokemons] = useState([
    { id: 1 },
    { id: 2 },
    { id: 55 },
    { id: 255 },
    { id: 256 },
    { id: 257 },
    { id: 65 },
    { id: 64 },
    { id: 634 },
    { id: 635 },
    { id: 306 },
    { id: 305 },
    { id: 199 },
    { id: 289 },
    { id: 365 },
    { id: 445 },
    { id: 452 },
    { id: 534 },
    { id: 533 },
    { id: 565 },
    { id: 862 },
    { id: 31 },
    { id: 34 },
    { id: 288 },
    { id: 115 },
    { id: 398 },
    { id: 461 },
    { id: 243 },
  ]);

  const [pokeID, setPokeID] = useState("");
  const [show, setShow] = React.useState(true);

  useEffect(() => {
    let listOfPokemons = localStorage.getItem("mypokemons");
    //Check the storage and get the pokemon list and
    //load the ui
    if (!listOfPokemons) {
      localStorage.setItem("mypokemons", JSON.stringify(pokemons));
    } else {
      listOfPokemons = JSON.parse(localStorage.getItem("mypokemons"));
      setPokemons(listOfPokemons);
    }
  }, []);

  const pokemonsList = pokemons.map(({ id }) => <Pokemon pokeID={id} />);

  const handleChange = (event) => {
    setPokeID(event.target.value);
  };

  const notify = (message) => toast(message);

  const AddP = () => {
    if (pokeID !== 0 && pokeID !== "" && !isNaN(pokeID)) {
      if (parseInt(pokeID) > 898) {
        console.log("Invalid pokemon id");
        notify("Cannot add Pokemon to the list.");
        return;
      }

      let listOfPokemons = JSON.parse(localStorage.getItem("mypokemons"));

      let obj = listOfPokemons.find((o) => o.id === parseInt(pokeID));

      if (obj === undefined) {
        listOfPokemons.push({ id: parseInt(pokeID) });

        setPokemons(listOfPokemons);

        localStorage.setItem("mypokemons", JSON.stringify(listOfPokemons));
        setPokeID("");

        setShow(true);
        notify("Pokemon was added.");
      } else {
        setShow(true);
        notify("Pokemon is in the list.");
      }
    } else {
      notify("Cannot add Pokemon to the list.");
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div key="divMain" className="App">
        <Container fluid>
          <Navbar fixed="top">
            <Row>
              <Col>
                <InputGroup>
                  <FormControl
                    key="kAddPokemonText"
                    id="idAddPokemonText"
                    value={pokeID}
                    onChange={handleChange}
                    placeholder="Add Pokemon"
                  />
                  <Button
                    key="kAddPokemonButton"
                    variant="primary"
                    onClick={AddP}
                  >
                    Add
                  </Button>
                </InputGroup>
              </Col>
            </Row>
          </Navbar>
        </Container>
        <Table striped bordered responsive>
          <tbody>{pokemonsList}</tbody>
        </Table>
      </div>
    </React.Fragment>
  );
}

export default App;
