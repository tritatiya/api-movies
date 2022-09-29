import { SET_MOVIES } from "../actions/moviesAction"

const initialState = []

export function moviesReducer(state=initialState, action){
    switch(action.type){
        case SET_MOVIES:
            return action.payload
        default:
            return state
    }
}