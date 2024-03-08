
import Cards from './components/Cards/Cards.jsx';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import LandingPage from './components/Landing/landing.jsx';
import Error404 from './components/Error404/Error404.jsx';
import { useState,useEffect } from 'react';
import { Route,Routes,useLocation,useNavigate} from 'react-router-dom';
import Favorites from './components/Favorites/favorites.jsx';
import { useDispatch} from 'react-redux';
import { getFavorites, removeFavorite } from './redux/actions.js';
import axios from 'axios';






function App() {

   const navigate = useNavigate();
   const location=useLocation();
   
   const dispatch=useDispatch();
   
   const [characters, setCharacters]=useState([]);
   dispatch(getFavorites);

   const onClose=(id) => {
      //crea un nuevo arreglo sin el personaje id
      const filteredState=characters.filter((char)=> char.id !== id);
      dispatch(removeFavorite(id));
      setCharacters(filteredState);
   }


   const onSearch=(input) => {

      let found=characters.find(
         (character) =>character.id===Number(input));

      if(!found){
         
         fetch(`http://localhost:3001/rickandmorty/character/${input}`)
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
    const [access, setAccess] = useState(false);

    function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
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
