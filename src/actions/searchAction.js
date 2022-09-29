export const SET_SEARCH = 'SET_SEARCH'

export function setSearch(searchText){
    return{
        type: SET_SEARCH,
        payload: searchText
    }
        
    
}