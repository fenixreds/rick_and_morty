
import Cards from './components/Cards/Cards.jsx';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import LandingPage from './components/Landing/landing.jsx';
import Error404 from './components/Error404/Error404.jsx';
import { useState,useEffect } from 'react';
import { Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/favorites.jsx';






function App() {


   const location=useLocation();
   
   const [characters, setCharacters]=useState([]);

   const onClose=(id) => {
      //crea un nuevo arreglo sin el personaje id
      const filteredState=characters.filter((char)=> char.id !== id);
      setCharacters(filteredState);
   }


   const onSearch=(input) => {

      let found=characters.find(
         (character) =>character.id===Number(input));

      if(!found){
         fetch(`https://rickandmortyapi.com/api/character/${input}`)
         .then((res)=>res.json())
         .then(
         (data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
            else {
               window.alert(`¡No hay personajes con este ID:${input}!`);
            }
         }
         );

      }else{
         window.alert(`¡Ya agrego al personaje con este ID:${input}!`);
      }
      

      
   }

   function randomHandler(){

      let haveIt=[];
      let random=(Math.random()*826).toFixed();
      random=Number(random);

      if(!haveIt.includes(random)){
         haveIt.push(random);
         fetch(`https://rickandmortyapi.com/api/character/${random}`)
         .then((res)=>res.json())
         .then(
         (data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
            else {
               window.alert(`¡No hay personajes con este ID`);
            }
         }
         );
      }else{
         window.alert("Todos los personajes fueron agregados");
      }
   }
   
    //LOGIN//
       const navigate = useNavigate();
       const [access, setAccess] = useState(false);
       const EMAIL = 'ejemplo@gmail.com';
       const PASSWORD = '1password';
   
       function login(userData) {
       if (userData.password === PASSWORD &&
          userData.email === EMAIL) {
           setAccess(true);
           navigate('/home');
       }
       }

       //LOGOUT//
       function logoutHandler(){
         setAccess(false);
         navigate("/");
       }
   
       useEffect(() => {
           !access && navigate('/');
        }, [access]);

   

   return (
      <div className="App">

         {
            (location.pathname!=="/")&&
            <Nav onSearch={onSearch} logout={logoutHandler} random={randomHandler}/>          
         }
            
         
         <Routes>
            <Route exact path="/" element={<LandingPage login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path='/favs'element={<Favorites/>}/>
            
         </Routes>        
            
      </div>
   );
}

export default App;
