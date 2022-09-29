import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: [],
    loading: false,
    error: ''
}

export const fetchMoviesAsync = createAsyncThunk('fetchMovies', async({searchText}) => {
    try {
        
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cf526ff11604bcb9e384182044651d7e&query=${searchText}`)
        const data = await response.json();
    if(data.results){
      const newMovies = data.results.slice(0,20).map((movie) =>{
        return{
          id:movie.id,
          title:movie.title,
          poster:`https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          price: 50 
        }
      })
    //   dispatch(setMovies({newMovies}))
    return newMovies
    }
    } catch (error) {
        throw error
    }      
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        setMovies:(state, action) => {
            state = action.payload.newMovies
            return state
            // return action.payload.movies
        }
    },
    extraReducers: {
        [fetchMoviesAsync.pending] : (state, action) => {
            state.loading = true
            state.error = ''
        },
        [fetchMoviesAsync.fulfilled] : (state, action) => {
            state.movies = action.payload
            state.loading = false
            state.error = ''
        },
        [fetchMoviesAsync.rejected] : (state, action) => {
            state.movies = []
            state.loading = false
            state.error = action.error.message
        },
    }
})



export default moviesSlice.reducer;