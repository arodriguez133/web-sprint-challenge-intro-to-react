
import React, {useState, useEffect} from 'react';
import CharacterDetails from './components/Character';
import Axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/")
    .then(response => {
      setCharacters(response.data.results);
    })
    .catch(error => {console.log('Server Error', error)
  });
}, []);

console.log("char", characters);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ul>
        {characters.map(character => {
          return (
          <CharacterDetails 
          name= {character.name} 
          height = {character.height} 
          mass= {character.mass}/>
        )})}
      </ul>
    </div>
  );
}

export default App;