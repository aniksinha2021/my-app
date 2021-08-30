// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
  const [pokemonsResponse, setData] = useState([]);
  const pokemonIds =[2,3];
//   const pokemonsResponse =[
//   {id:1,name:'Bulbasaur',imgSrc:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',type:['grass','poison']},
//   {id:2,name:'Ivysaur',imgSrc:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',type:['grass','poison']},
//   {id:257,name:'Blaziken',imgSrc:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/257.png',type:['fire','fighting']},
//   {id:484,name:'Palkia',imgSrc:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/484.png',type:['water','dragon']},
//   {id:757,name:'Unknow',imgSrc:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/757.png',type:['water','dragon']}
// ];
  //const pokemonsResponse=[];

  
  
  // for(let i=0;i< pokemonIds.length;i++)
  // {
  //   console.log(pokemonIds[i]);
  //   let pokeID = pokemonIds[i];
  //   axios.get(
  //          'https://pokeapi.co/api/v2/pokemon/'+ pokeID,
  //        ).then((response) => {
  //          console.log(response.data.name);
  //          pokemonsResponse.push(response.data);
  //        });
  // }

  //console.log(pokemonsResponse);
  //setData(pokemonsResponse);
  // {pokemonIds.map(function(pokeID,index) {
  //   console.log(pokeID);
  
  //   console.log(result.data);    
  // })}

   useEffect(async() => {
    //console.log(result);
     setData(getPokemonData());
   },[]);

   const getPokemonData = ()  => {
    let pokemonData =[];
    {pokemonIds.map(function(pokeID,index){ 
      
      console.log(pokeID);
      
      axios.get(
        'https://pokeapi.co/api/v2/pokemon/'+ pokeID,
      ).then((response) => {
        console.log('got pokemon:' + response.data.name);
        pokemonData.push(response.data);
        
        //pokemonsResponse.push(response.data);
      });
    
    })};
  
    return pokemonData;
  }
 
  // function getName(id)
  // {
  //   try{
  //     console.log('Getting name' + id);
  //     let response = axios.get('https://pokeapi.co/api/v2/pokemon/'+ id).then((response) => { console.log(response.data.name); return response.data.name;     });
  //     console.log(response);
  //     return response;
  //     // fetch('https://pokeapi.co/api/v2/pokemon/'+ id)
  //     // .then(
  //     //   result =>{
  //     //     console.log(result.json().);
  //     //   }
  //     // )
  //   }
  //   catch(error){
  //     console.log(error);
  //   }

  //   return 'testname'
  // }
  console.log('Pokemons list');
  console.log(pokemonsResponse);
  return (
    // <label>No Working</label>
     <table key='tablepokemon'>
       { pokemonsResponse.map(item => (
         <tbody>
         <tr>
           <td key={item.id}>{item.name}</td>
           <td ><img key={'img' +item.id} alt={item.name} src={item.imgSrc}></img></td>
           <td>{item.type.map(pt => (<button>{pt}</button>))}</td>
          </tr>
          </tbody>
       ))}
        
     </table>
  );
}
 
export default App;