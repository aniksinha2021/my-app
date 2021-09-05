//import { Container } from 'postcss';
import React, { useState, useEffect } from 'react';
import { InputGroup,Container,Row,Col,FormControl,Button } from 'react-bootstrap';

const AddPokemon = () =>
{
    const [pokeID, setPokeID] = useState(0);

    const AddP = () => { console.log('Adding pokemon'); console.log(pokeID);

        if(pokeID!==0)
        {
            console.log('Add to Pokemon list')
            let listOfPokemons=JSON.parse(localStorage.getItem('mypokemons'));

            console.log(typeof(listOfPokemons));
            listOfPokemons.push({id:parseInt(pokeID)})
            localStorage.setItem('mypokemons',JSON.stringify(listOfPokemons));
        }
        else
        {
            console.log('cannot add to Pokemon list')
        }
}
    const handleChange = (event) => { 
                console.log('text changed')
                console.log(event.target.value);
                setPokeID(event.target.value);
            }

    //useEffect(() =>{})
    return (
        <Container fluid>
            <Row>
                <Col>
                <InputGroup>
                    <FormControl value={pokeID} key='kAddPokemonText' id='idAddPokemonText' onChange={handleChange}
                        placeholder="Add Pokemon"
                    />
                    <Button key='kAddPokemonButton' variant="primary" onClick={AddP}>
                        Add
                    </Button>
                </InputGroup>
                </Col>
            </Row>
        </Container>
    );


}

export default AddPokemon;