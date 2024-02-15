import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";

export default function Nav({onSearch, logout, random}){
    return(
        
        <div className={style.divNav}>
            
            
            <div >
                <Link to='/about'>
                <button className={style.boton}>About</button>
                </Link>   
            </div>
            
            <div>
                <Link to='/home'>
                <button className={style.boton}>Home</button>
                </Link>
            </div>

            <div>
                <Link to='/favs'>
                <button className={style.boton}>Favoritos</button>
                </Link>
            </div>

            <div>
                <SearchBar onSearch={onSearch} />
            </div>

            <div>
                <button 
                className={style.boton}
                onClick={random}>Add Random</button>
            </div>
            
            <div>
                <button 
                className={style.boton}
                onClick={logout}>Log out</button>
            </div>
            

        </div>
    )
}