import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Controls = ({ item }) => {
    const { removeMovieFromFavouriteList } = useContext(GlobalContext)

    return (
        <div>
            <button onClick = {() => removeMovieFromFavouriteList(item.id)}>
                <i className="fa fa-heart aria-hidden='true'"></i>
            </button>
        </div>
    )
}