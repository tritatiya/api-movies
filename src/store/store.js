import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import searchSlice from "./slices/searchSlice";

export default configureStore({
    reducer: {
        search: searchSlice,
        movies: moviesSlice
    }
})