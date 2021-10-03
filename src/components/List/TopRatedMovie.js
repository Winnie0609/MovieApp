import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { getList } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'
import { ResultCard, CustomPagination } from '../allComponent'

function TopRatedMovie() {
    const { dispatch, state } = useContext(GlobalContext)
    const [page, setPage] = useState(1)
    const [isMovie, setIsMovie] = useState(true)

    function switchToTvShow() {
        setIsMovie(false)
    }

    function switchToMovie() {
        setIsMovie(true)
    }

    useEffect(() => {
        if (isMovie) {
            getList(page, dispatch, "top_rated_movie")
        } else {
            getList(page, dispatch, "top_rated_tvShows")
        }
    }, [isMovie, page])

    let TopRatedList = state.top_rated_list
    // console.log(TopRatedList)

    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <div className="top-rated-page">
            <div className="margin-container">
                <button onClick={ goToPreviousPath } className="go-back-btn">
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>
                
                <div className="list-title-front page-list-title-front">
                    <h1 className="page-title">Top Rated</h1>
                    <button className={isMovie? "active movie" : "movie"} onClick={() => switchToMovie()}>Movie</button>
                    <button className={isMovie? "tvShow" : "active tvShow"} onClick={() => switchToTvShow()}>Tv show</button>
                </div>

                {TopRatedList.map((item) => (
                    <ResultCard item={item} key={item.id} isMovie={isMovie}/>
                ))}

                <CustomPagination setPage={setPage} numOfPages={10}/>
            </div>
        </div>
    )
}

export default TopRatedMovie