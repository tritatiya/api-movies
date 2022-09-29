import { FETCH_END, FETCH_ERROR, FETCH_START } from "../actions/statusAction";

const initialState = {
    loading: false,
    error: ''
}

export function statusReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_START:
            return{
                ...state,
                loading: true,
            }
        case FETCH_END:
            return{
                ...state,
                loading: false
            }
        case FETCH_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}