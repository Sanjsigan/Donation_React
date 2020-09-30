import {ACTION_TYPES}from "../actions/dCandidates";
const initialstate={
    list:[]
}

export const dCandidates =(state=initialstate,action)=>{
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return{
                    ...state,
                    list:[...action.payload]
            }
            
    
        default:
            break;
    }
}