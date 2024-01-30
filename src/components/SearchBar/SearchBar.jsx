import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.divSearch}>
         <input type='search' placeholder="Ingrese codigo" className={style.input}/>
         <button onClick={()=>onSearch("soy el id")} className={style.boton}>Agregar</button>
      </div>
   );
}


//52min