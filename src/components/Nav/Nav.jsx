import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar'
import { Link } from "react-router-dom";

export default function Nav({onSearch}){
    return(
        
        <div className={style.divNav}>
            
            
            <div>
                <Link to='/about'>
                <button>About</button>
                </Link>   
            </div>
            
            <div>
                <Link to='/home'>
                <button>Home</button>
                </Link>
            </div>

            <div>
                <SearchBar onSearch={onSearch} />
            </div>
            
            
            

        </div>
    )
}