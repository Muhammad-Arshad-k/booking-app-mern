import { useReducer } from "react";
import { createContext } from "react";


const INITIAL_STATE  = {
    city:"",
    dates:[],
    options:{
        adult:"",
        children:"",
        room:""
    }
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state,action) =>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE 
        default:
            return state;
    }
}

export const SearchContextProvider = ({children})=>{
    const {state,dispatch} = useReducer(SearchReducer,INITIAL_STATE)
}