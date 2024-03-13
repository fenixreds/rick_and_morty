import style from "./Card.module.css";
import { Link } from "react-router-dom";
import {addFavorite, removeFavorite} from "../../redux/actions"
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();
   const favorites =  useSelector((state)=>state.favorites);

   const myChar = {
      name: name,
      gender: gender,
      species: species,
      id: id,
      image: image,
   }

   useEffect(() => {
      favorites.forEach((fav) => {
         
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [favorites]);

   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false);
        
         dispatch(removeFavorite(id)) //mandar id de personaje como argumento
         
      }else{
         setIsFav(true);
         
          dispatch(addFavorite(myChar)) //mandar personaje como arg
         
      }
   }

   return (
      <div className={style.divCard}>

         <div className={style.divImage}>   
            <img 
            className={style.image} 
            src={image}
            alt=''  
            /> 
         
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button className={style.closeButton} 
         onClick={()=>(onClose(id))}>X</button>
         
         


         <Link to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
         </Link>

         </div>

         <div className={style.divAtributos}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>  

         
         
      </div>
   );
}

