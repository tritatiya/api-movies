import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state = action.payload
            return state
            // return action.payload.title
        }
    }
})

export const {setSearch} = searchSlice.actions

export default searchSlice.reducer