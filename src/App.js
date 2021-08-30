import React, { useState } from "react";
import Pokemon from "./Pokemon";
import AddPokemon from "./AddPokemon";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { Container } from "react-bootstrap";

function App() {
  const [pokemons,setPokemons] = useState([
    {id:1 },{id:2},{id:55},{id:255},{id:256},
    {id:257},{id:65},{id:64},{id:634},{id:635},
    {id:306},{id:305},{id:199},{id:289},{id:365},
    {id:445},{id:452},{id:534},{id:533},{id:565},{id:862},{id:31},{id:34},{id:288},
    {id:115 },{id:398},{id:461},{id:243}
  ])

  const pokemonsList = pokemons.map(({ id }) => (
    // <tr key={id}>
      <Pokemon
           pokeID={id}
      />
    // </tr>
  ));

  return(
    <div className="App">
      {/* <table>
        <tbody>
        {pokemonsList}
        </tbody>
      </table> */}
      <AddPokemon></AddPokemon>
      <Table striped bordered responsive>
        <tbody>
        {pokemonsList}
        </tbody>
      </Table>
      <Container>
        
      </Container>
    </div>
  )
}

export default App;

