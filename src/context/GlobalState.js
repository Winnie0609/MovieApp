import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    favouriteList: JSON.parse(localStorage.getItem("Favourite")) || [],
    top_rated_list: [],
    popular_list: [],
    upComing_list: [],
    movie_trending_list: [],
    tvShow_trending_list: [],
    trending_person_list: [],
    now_playing_list: [],
    banner_movie_list: [],
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
                trending_person_list: state.trending_person_list,
                addMovieToFavouriteList,
                removeMovieFromFavouriteList,
                popular_list: state.popular_list,
                state,
                dispatch
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}