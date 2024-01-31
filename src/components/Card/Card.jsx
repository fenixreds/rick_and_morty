import style from "./Card.module.css";

export default function Card({id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.divCard}>
         
         <div className={style.divImage}>
            <img src={image} alt='' className={style.image} /> 
            <button onClick={()=>onClose(id)} className={style.closeButton}>X</button>
            <h2 className={style.name}>{name}</h2>
         </div>

         <div className={style.divAtributos}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>        
         
      </div>
   );
}
