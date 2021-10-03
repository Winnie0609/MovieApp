import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from "react-router-dom"
import { getList } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'
import { ResultCard, CustomPagination } from '../allComponent'

function PopularList() {
    const { dispatch, state } = useContext(GlobalContext)
    const [page, setPage] = useState(1)
    const [isMovie, setIsMovie] = useState(true)
    const [isTvShow, setIsTvShow] = useState(false)

    function switchToTvShow() {
        setIsMovie(false)
        setIsTvShow(true)
        // console.log("TvShows")
    }

    function switchToMovie() {
        setIsMovie(true)
        setIsTvShow(false)
        // console.log("Movie")
    }
   
    useEffect(() => {
        if (isMovie) {
            getList(page, dispatch, "popular_movie")
            // console.log("get movie")
        } else if (isTvShow) {
            getList(page, dispatch, "popular_tvShows")
            // console.log("get tv shows")
        }
    }, [isMovie, isTvShow, page])

    let PopularList = state.popular_list
    // console.log(PopularMovie)

    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }
    
    return (
        <div className="popular-list">
            <button onClick={ goToPreviousPath } className="go-back-btn">
                <i className="fas fa-chevron-left"></i>
                Back
            </button>
                
            <div className="list-title">
                <div className="list-title-front page-list-title-front">
                    <h2 className="page-title">Popular</h2>
                    <button className={isMovie? "movie active" : "movie"} onClick={() => switchToMovie()}>Movie</button>
                    <button className={isTvShow? "tvShow active" : "tvShow"} onClick={() => switchToTvShow()}>Tv show</button>
                </div>

                
                <Link to="/Popular">
                    <button className="see-more">
                        See More 
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </Link>
            </div> 

            <div className="fade">
                <div className="result-list">
                    {PopularList.map((item) => (
                        <ResultCard item={item} key={item.id} isMovie={isMovie}/>
                    ))}
                </div>
            </div>

            <CustomPagination setPage={setPage} numOfPages={10}/>
        </div>
    )
}

export default PopularList