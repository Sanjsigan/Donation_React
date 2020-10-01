import {ACTION_TYPES}from "../actions/dCandidates";
const initialState={
    list:[]
}

export const dCandidates =(state=initialState,action)=>{
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return{
                    ...state,
                    list:[...action.payload]
            }
    
        default:
            return state 
    }
}