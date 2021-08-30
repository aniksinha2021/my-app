import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';

const Pokemon = ({pokeID}) =>
{
 const [isLoading, setLoading] = useState(true);
 const [pokemon, setPokemon] = useState();
 const [pokemonType, setPokemonType] = useState();
 const [pokemonStats, setPokemonStats] = useState();

useEffect(() => {
  console.log(pokeID)
  axios.get("https://pokeapi.co/api/v2/pokemon/" + pokeID).then(response => {
    //console.log(response.data.types);
    setPokemon(response.data);
    setPokemonType(response.data.types);
    setPokemonStats(response.data.stats);
    setLoading(false);
  });
},[]);

if (isLoading) {
  return <div className="App">Loading...</div>;
}

return (
  <tr key={pokeID}>
    <td key={pokemon.name}> <span style={{fontSize:18}}><b>{pokemon.name}</b></span>
    <br></br>
    <label>Height:{Math.round(pokemon.height*0.33*100)/100} ' </label>
    <br></br>
    <label>Weight:{Math.round(pokemon.weight*0.22*100)/100} lb </label>
    <br></br>
    {pokemonType.map(pTy =>(<span>
        {pTy.type.name==='water' && <button style={{background:"blue",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='ground' && <button style={{background:"brown",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='dragon' && <button style={{background:"darkblue",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='ice' && <button style={{background:"aqua",color:"black"}}> {pTy.type.name}</button>}
        {pTy.type.name==='grass' && <button style={{background:"green",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='poison' && <button style={{background:"purple",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='fire' && <button style={{background:"red",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='fighting' && <button style={{background:"#8a1f17",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='psychic' && <button style={{background:"#f366b9",color:"black"}}> {pTy.type.name}</button>}
        {pTy.type.name==='normal' && <button style={{background:"#79858a",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='steel' && <button style={{background:"#57a2c2",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='rock' && <button style={{background:"#335234",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='dark' && <button style={{background:"black",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='flying' && <button style={{background:"blue",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='bug' && <button style={{background:"black",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='ghost' && <button style={{background:"black",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='electric' && <button style={{background:"yellow",color:"black"}}> {pTy.type.name}</button>}
        {pTy.type.name==='fairy' && <button style={{background:"black",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='shadow' && <button style={{background:"black",color:"white"}}> {pTy.type.name}</button>}
        {pTy.type.name==='unknown' && <button style={{background:"black",color:"white"}}> {pTy.type.name}</button>}
        </span>))}
    </td>
    <td ><img alt={pokemon.name} src={pokemon.sprites.front_default} />
         
    </td>
    {/* <td > {pokemon.types.map(pt => (<button style={{color:"red"}}>{pt.type.name}</button>))}</td>  */}
    {/* <td>
     
    </td> */}
    <td >
      {pokemonStats.map(pStats =>(<span>{pStats.stat.name==='hp' && <ProgressBar striped variant="success" now={pStats.base_stat} min='0' max='255' label={pStats.stat.name + " " + pStats.base_stat}/> } </span>))}
      {pokemonStats.map(pStats =>(<span>{pStats.stat.name==='attack' && <ProgressBar striped variant="danger" now={pStats.base_stat} min='0' max='255' label={pStats.stat.name + " " + pStats.base_stat}/> } </span>))}
      {pokemonStats.map(pStats =>(<span>{pStats.stat.name==='defense' && <ProgressBar striped variant="warning" now={pStats.base_stat} min='0' max='255' label={pStats.stat.name + " " + pStats.base_stat}/> } </span>))}
      {pokemonStats.map(pStats =>(<span>{pStats.stat.name==='special-attack' && <ProgressBar striped variant="info" now={pStats.base_stat} min='0' max='255' label={pStats.stat.name + " " +pStats.base_stat}/> } </span>))}
      {pokemonStats.map(pStats =>(<span>{pStats.stat.name==='special-defense' && <ProgressBar striped variant="success" now={pStats.base_stat} min='0' max='255' label={pStats.stat.name + " " +pStats.base_stat}/> } </span>))}
      {pokemonStats.map(pStats =>(<span>{pStats.stat.name==='speed' && <ProgressBar striped variant="danger" now={pStats.base_stat} min='0' max='255' label={pStats.stat.name + " " +pStats.base_stat}/> } </span>))}
    </td>
    
    {/* <td>
      {pokemonStats.map(pStats =>(<span><label>{pStats.stat.name}</label>  <label>{pStats.base_stat}</label> </span>))}
    </td> */}
  </tr>
);


}

export default Pokemon;