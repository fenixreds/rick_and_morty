import style from "./favorites.module.css";
import Cards from "../../components/Cards/Cards.jsx"
import { useDispatch,useSelector } from "react-redux"
import { sort,filterCards,reset } from "../../redux/actions.js";



export default function Favorites(){

    const dispatch=useDispatch();
    const favorites=useSelector(state=>state.favorites);

    function handleSort(e){
        dispatch(sort(e.target.value))
    }

    function handleFilter(e){
        dispatch(filterCards(e.target.value))
    }

    function handleReset(){
        dispatch(reset());
    }


    return(
        <div className={style.favoritesContainer}>
            <div className={style.controlesContainer}>
                <select className={style.control}
                placeholder="Order" onChange={handleSort}> 
                    <option  value="Ascendente">Ascendente</option>
                    <option  value="Descendente">Descendente</option>
                </select>

                <select className={style.control} 
                placeholder="Gender" onChange={handleFilter}>
                    {["Male","Female","unknown","Genderless"].map((gender)=>(
                        <option value={gender}>{gender}</option>
                    ))}   
                </select>

                <button className={style.control} 
                 value="reset" onClick={handleReset}>RESET</button>
            </div>

            <div className={style.cards}>
                <Cards characters={favorites}/>
            </div>
            

            
            
        </div>
    )

}


//SUSTITUIDO CON EL USESELECTOR
// const mapStateToProps=(state)=>{
//     return{
//         favorites: state.favorites
//     }
// }

// export default connect(mapStateToProps) (Favorites);