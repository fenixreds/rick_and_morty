export const ADD_FAVORITE="ADD_FAVORITE"
export const REMOVE_FAVORITE="REMOVE_FAVORITE"
export const FILTER="FILTER"
export const SORT="SORT"
export const RESET="RESET"


export function addFavorite(character){
    return{
        type: "ADD_FAVORITE",
        payload:character
    }
}

export function removeFavorite(id){
    return{
        type: "REMOVE_FAVORITE",
        payload:id
    }
}

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

