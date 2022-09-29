import { endFetch, errorFetch, startFetch } from "./statusAction"

export const SET_MOVIES = 'SET_MOVIES'

export function setMovies(movieList){
    return {
        type: SET_MOVIES,
        payload: movieList
    }
}

export function fetchMovies(searchText){
    return async (dispatch, getState) => {
        try {
            dispatch(startFetch())
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
          dispatch(setMovies(newMovies))
        }
        dispatch(errorFetch(''))
        dispatch(endFetch());
        } catch (error) {
            dispatch(setMovies([]))
            dispatch(errorFetch(error))
            dispatch(endFetch());
        }      
    }

}