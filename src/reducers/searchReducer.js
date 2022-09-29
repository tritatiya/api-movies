import { SET_SEARCH } from "../actions/searchAction"


const initialState = ''

export function searchReducer(state=initialState, action){
    switch(action.type){
        case SET_SEARCH :
            return action.payload
        default:
            return state
    }
}