
import Cards from './components/Cards/Cards.jsx';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';






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
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>

         </Routes>        
            
      </div>
   );
}

export default App;
