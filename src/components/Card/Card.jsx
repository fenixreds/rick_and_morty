import style from "./Card.module.css";
import { Link } from "react-router-dom";
import {addFavorite, removeFavorite} from "../../redux/actions"
import { connect } from "react-redux";
import { useState,useEffect } from "react";

function Card({character, onClose ,addFavorite,removeFavorite,favorites}) {

   
   const [closeBtn,setCloseBtn]=useState(true);
   const [isFav,setIsFav]= useState(false);

   useEffect(()=>{
      if(!onClose){
         setCloseBtn(false)
      }
   },[]);

   useEffect(() => {

      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
         
      });
   }, [favorites]);

   function favoriteHandler(data){
      if(isFav){
         removeFavorite(data) //character.id
         setIsFav(false)
      }else{
         addFavorite(data) //character
         setIsFav(true)
      }
   }

   return (
      <div className={style.divCard}>
         
         <div className={style.divImage}>
            <img 
            className={style.image} 
            src={character.image}
            alt=''  
            /> 

            {isFav ? (
                  <button onClick={()=>favoriteHandler(character.id)}>❤️</button>
               ) : (
                  <button onClick={()=>favoriteHandler(character)}>🤍</button>
               )}
            
            {closeBtn?(
               <button 
               className={style.closeButton}
               onClick={()=>onClose(character.id)} >
               X
              </button>

            ):null}      

            

            <Link to={`/detail/${character.id}`}>
               <h2 className={style.name}>{character.name}</h2>
            </Link>   
         </div>

         <div className={style.divAtributos}>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
         </div>        
         
      </div>
   );
}

//pasa el dispatch a los props
const mapDispatchToProps= (dispatch)=>{
   return{
      addFavorite:(character)=>dispatch(addFavorite(character)),
      removeFavorite:(id)=>dispatch(removeFavorite(id))
   };
};

//pasa el estado global a los props
const mapStateToProps=(state)=>{
   return{
      favorites:state.favorites,
      
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)   