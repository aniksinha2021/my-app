import React from 'react';

import axios from 'axios';

export default class Pokemons extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() 
  {
    const pokemonIds =[2,3];
    let pokemonData =[];
    {pokemonIds.map(function(pokeID,index)
        { 
      
            console.log(pokeID);
        
            axios.get('https://pokeapi.co/api/v2/pokemon/'+ pokeID,)
            .then((response) => {
                console.log('got pokemon:' + response.data.name);
                pokemonData.push(response.data);
          
          //pokemonsResponse.push(response.data);
        });
      
      })
    };
    
    console.log(pokemonData);
    this.setState({ pokemonData });
 }

    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
  

  render() {
      console.log(this.state.persons);
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}