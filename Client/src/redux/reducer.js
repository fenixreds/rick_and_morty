import {ADD_FAVORITE, REMOVE_FAVORITE,GET_FAVORITES,FILTER,RESET, SORT} from "./actions"


const initialState={favorites:[], allcharacters:[]}

function rootReducer(state=initialState,action){
    switch(action.type){

        case ADD_FAVORITE:
            
            return{
                ...state,
                favorites:action.payload,
                allcharacters:action.payload
            }

        case REMOVE_FAVORITE:
            
            return{
                ...state,
                favorites: action.payload,
                allcharacters:action.payload
                
            }
        
        case GET_FAVORITES:
            
            return{
                ...state,
                favorites: action.payload,
                allcharacters:action.payload
                
            }    




        case FILTER:
            return{
                ...state,
                favorites: state.allcharacters.filter(
                    (character)=>character.gender===action.payload
                ),
            }   
            
        case SORT:
            let sorted;
            if(action.payload==="Ascendente"){
                sorted=state.favorites.sort((a,b)=>a.id>b.id ? 1:-1)
            }else if(action.payload==="Descendente"){
                sorted=state.favorites.sort((a,b)=>a.id<b.id ? 1:-1)
            }
            return{
                ...state,
                favorites: [...sorted],
                

            }   
        
        case RESET:
                return{
                    ...state,
                    favorites: state.allcharacters,
                }       

        default:
            return state
    }
}

export default rootReducer;