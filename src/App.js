
import Cards from './components/Cards/Cards.jsx';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';




function App() {

   const [characters, setCharacters]=useState([]);

   const onClose=(id) => {
      //crea un nuevo arreglo sin el personaje id
      const filteredState=characters.filter((char)=> char.id !== id);
      setCharacters(filteredState);
   }


   const onSearch=(id) => {

      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res)=>res.json())
      .then(
      (data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
         else {
            window.alert(`¡No hay personajes con este ID:${id}!`);
         }
      }
      );

      
   }
   

   return (
      <div className="App">        
            <Nav onSearch={onSearch}/>
            <Cards characters={characters} onClose={onClose} />  
      </div>
   );
}

export default App;
