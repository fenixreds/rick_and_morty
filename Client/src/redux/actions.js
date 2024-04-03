import axios from "axios";

export const ADD_FAVORITE="ADD_FAVORITE"
export const ADD_CHARACTER = 'ADD_CHARACTER'
export const REMOVE_FAVORITE="REMOVE_FAVORITE"
export const REMOVED_CHARACTER = 'REMOVED_CHARACTER';
export const FILTER="FILTER"
export const SORT="SORT"
export const RESET="RESET"
export const GET_FAVORITES="GET_FAVORITES"


export function addChar(char){
   return{
       type: ADD_CHARACTER,
       payload:char
   }
}

export function removedChar(id){
   return{
       type: REMOVED_CHARACTER,
       payload:id
   }
}

export const getFavorites=()=>{
    const endpoint = 'http://localhost:3001/rickandmorty/favs/';
    return (dispatch) => {
       axios.get(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: 'GET_FAVORITES',
             payload: data,
       });
       });
    };
};


export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   
    
    return async (dispatch) => {
      try {
         const response=await axios.post(endpoint, character)
         return dispatch({
            type: 'ADD_FAVORITE',
            payload: response.data,
         });

      } catch (error) {
         console.log(error.message);
      }

       
       
    };
 };

 export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const response=await axios.delete(endpoint)
         return dispatch({
            type: 'REMOVE_FAVORITE',
            payload: response.data,
      });

      } catch (error) {
         console.log(error.message);
      }
    };
 };

export function filterCards(gender){
    return{
        type: "FILTER",
        payload:gender,
    }
}

export function sort(order){
    return{
        type: "SORT",
        payload:order,
    }
}

export function reset(){
    return{
        type: "RESET",
        
    }
}

