
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
        <div>

            <select placeholder="Order" onChange={handleSort}> 
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>

            <select placeholder="Gender" onChange={handleFilter}>
                {["Male","Female","unknow","Genderless"].map((gender)=>(
                    <option value={gender}>{gender}</option>
                ))}   
            </select>

            <button value="reset" onClick={handleReset}>RESET</button>

            <Cards characters={favorites}/>
            <p>Favoritos</p>
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