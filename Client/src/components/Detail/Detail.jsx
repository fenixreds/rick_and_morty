import { useParams } from "react-router-dom";
import axios from "axios";
import { useState , useEffect} from "react";

const Detail = () =>{
    const [character, setCharacter]=useState({})
    const{id}=useParams()//AQUI DECONSTRUYE EL OBJETO PARA USAR SOLO ID//

    useEffect(() => {
        
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt=''  /> 

        </div>

    )
}

export default Detail;