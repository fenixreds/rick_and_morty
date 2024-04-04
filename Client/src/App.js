
import Cards from './components/Cards/Cards.jsx';
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import LandingPage from './components/Landing/landing.jsx';
import Error404 from './components/Error404/Error404.jsx';
import Register from './components/Register/Register.jsx';
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
   
  

   const onClose=(id) => {
      
      dispatch(removedChar(id));
      dispatch(removeFavorite(id));
      
   }


   const onSearch=async (input) => {

      const found=allCharacters.find(
         (character)=>character.id===Number(input));

      if(!found){
         try {
            const response=await axios(`http://localhost:3001/rickandmorty/character/${input}`)
            if(response.data.name){
               dispatch(addChar(response.data));
            }else{
               window.alert(`No hay personajes con este ID: ${input}!`);
            }
            
         } catch (error) {
            console.log(error.message);
            window.alert(`No hay personajes con este ID: ${input}!`);
         }

      }else{
         window.alert(`¡Ya agrego al personaje con este ID:${input}!`);
      } 

      

      
      
     
   }




   const randomHandler=async ()=>{

      let haveIt=[];
      let random=(Math.random()*826).toFixed();
      random=Number(random);

      if(!haveIt.includes(random)){
         haveIt.push(random);

         try {
            const response=await axios(`http://localhost:3001/rickandmorty/character/${random}`)
            if(response.data.name){
               dispatch(addChar(response.data));
            }else{
               window.alert(`No hay personajes con este ID: ${random}!`);
            }
            
         } catch (error) {
            console.log(error.message);
            window.alert(`No hay personajes con este ID: ${random}!`);
         }
      }else{
         window.alert("Todos los personajes fueron agregados");
      }

      
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
   
   //REGISTER//
   async function register(userData) {

      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const result=await axios.post(URL ,userData);
         console.log(userData);
         console.log(result);
         if(result.status===200){
            window.alert("Su cuenta fue creada exitosamente");
            navigate("/")
         }
         else{
            window.alert("La cuenta ya existe o faltan datos");
            
         }
         
      } catch (error) {
         console.log(error.message);
         window.alert("La cuenta ya existe o faltan datos");
      }

      
   }
   

   //VALIDA SI HAY UN CAMBIO EN access Y SI NO ES TRUE TE ENVIA AL LOGIN    
   useEffect(() => {
       !access && navigate('/');
   }, [access]);

   

   return (
      <div className="App">

         {
            ((location.pathname!=="/")&&(location.pathname!=='/Register'))&&
            <Nav onSearch={onSearch} logout={logoutHandler} random={randomHandler}/>          
         }
            
         
         <Routes>
            <Route exact path="/" element={<LandingPage login={login}/>}/>
            <Route path='/home' element={<Cards characters={allCharacters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path='/favs'element={<Favorites/>}/>
            <Route path='/register' element={<Register register={register}/>}/>
            
         </Routes>        
            
      </div>
   );
}

export default App;
