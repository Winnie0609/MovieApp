import React, {createContext, useReducer, useEffect} from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    favouriteList: JSON.parse(localStorage.getItem("Favourite")) || []
}

//create context
export const GlobalContext = createContext(initialState)

//provider components
export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //actions
    const addMovieToFavouriteList = (movie) => {
        dispatch({ type: "ADD_MOVIE_TO_FAVOURITE_LIST", payload: movie })
    }

    const removeMovieFromFavouriteList = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITE_LIST", payload: id })
    }

    useEffect(() => {
        localStorage.setItem("Favourite", JSON.stringify(state.favouriteList))
    }, [state])

    return (
        <GlobalContext.Provider 
            value={{ 
                favouriteList: state.favouriteList,
                addMovieToFavouriteList,
                removeMovieFromFavouriteList
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
