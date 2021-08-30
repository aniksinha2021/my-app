
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonType = ({pokemonTypes}) =>
{
//  const [isLoading, setLoading] = useState(true);
// const [pokemonType, setPokemonType] = useState();

//useEffect(() => {
//   console.log(pokeID)
//   axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeID).then(response => {
     //Sconsole.log(response.data);
//     setPokemon(response.data);
//     setLoading(false);
//   });
//},[]);

// if (isLoading) {
//   return <div className="App">Loading...</div>;
// }

return (
  // <div>
  //   <h2>Pokemon Name</h2>
  //   <h1>{pokeName}</h1>
  //   <img alt={pokemon.name} src={pokemon.sprites.front_default} />
  // </div>
  
   {pokemonTypes.map(pt => (<button style={{color:"red"}}>{pt.type.name}</button>))}
  
);
}

export default Pokemon;
//{pokemon.types.map(pt => (<button style={{color:"red"}}>{pt.type.name}</button>))}