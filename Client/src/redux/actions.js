import axios from "axios";

export const ADD_FAVORITE="ADD_FAVORITE"
export const REMOVE_FAVORITE="REMOVE_FAVORITE"
export const FILTER="FILTER"
export const SORT="SORT"
export const RESET="RESET"
export const GET_FAVORITES="GET_FAVORITES"

export const getFavorites=()=>{
    const endpoint = 'http://localhost:3001/rickandmorty/fav/';
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
    return (dispatch) => {
       axios.post(endpoint, character)
       .then(({ data }) => {
          return dispatch({
             type: 'ADD_FAVORITE',
             payload: data,
          });
       });
    };
 };

 export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
       .then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAVORITE',
             payload: data,
       });
       });
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

