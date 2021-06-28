// Write your Character component here
  
import React from 'react';
import Styled from 'styled-components';

const IdCard = Styled.div `
border: 1px solid black;
margin: 10px auto;
width: 50%;
`

function CharacterDetails(props){
 console.log("props from app", props)
    return (
        <IdCard>
            <h1>Name: {props.name}</h1>
            <h3>Height: {props.height}</h3>
            <h3>Mass: {props.mass}</h3>
            
        </IdCard>
    )
}

export default CharacterDetails;