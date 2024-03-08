import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const[id,setId]=useState('');

   const handleInputChange=(e)=>{
      setId(e.target.value);
   }

   return (
      <div className={style.divSearch}>

         <input type='search' placeholder="Ingrese codigo" className={style.input} value={id} onChange={handleInputChange}/>

         <button onClick={()=>onSearch(id)} className={style.boton}>Agregar</button>

      </div>
   );
}


//52min