
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
import { useDispatch,useSelector} from 'react-redux';
import { getFavorites, removeFavorite,addChar,removedChar } from './redux/actions.js';
import axios from 'axios';






function App() {

   const allCharacters =  useSelector((state)=>state.allcharacters);
   
   

   const dispatch=useDispatch();
   const navigate = useNavigate();
   const location=useLocation();
   
   //dispatch(getFavorites);

   const onClose=(id) => {
      //crea un nuevo arreglo sin el personaje id
      dispatch(removedChar(id));
      //dispatch(removeFavorite(id));
      
   }


   const onSearch=async (input) => {

      try {
         const response=await axios(`http://localhost:3001/rickandmorty/character/${input}`)
         if(response.data.name){
            dispatch(addChar(response.data));
         }else{
            window.alert(`No hay personajes con este ID: ${input}!`);
         }
         
      } catch (error) {
         console.log(error.message);
      }

      
      
     
   }




   function randomHandler(){

      
   }
   


    //LOGIN//
    const [access, setAccess] = useState(false);

    async function login(userData) {

      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const result=await axios(URL + `?email=${email}&password=${password}`)
         
         const { access } = result.data;
         setAccess(result.data);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message);
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
            <Route path='/home' element={<Cards characters={allCharacters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path='/favs'element={<Favorites/>}/>
            
         </Routes>        
            
      </div>
   );
}

export default App;
