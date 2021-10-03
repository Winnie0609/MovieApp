import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from "react-router-dom"
import { getMovieTrendingList } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'
import { ResultCard, CustomPagination } from '../allComponent'

function MovieTrendingList({ backDrop }) {
    const { dispatch, state } = useContext(GlobalContext)
    const [page, setPage] = useState(1)
    const [isDay, setIsDay] = useState(true)

    function switchToDay() {
        setIsDay(true)
        // console.log("TvShows")
    }

    function switchToWeek() {
        setIsDay(false)
        // console.log("Movie")
    }

    useEffect(() => {
        if (isDay) {
            getMovieTrendingList(page, dispatch, "movie_trending_day")
        } else {
            getMovieTrendingList(page, dispatch, "movie_trending_week")
        }
    }, [isDay, page])

    let MovieTrendingList = state.movie_trending_list
    // console.log(MovieTrendingList)

    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        // <div className="trending-movie-page">
                <div className="trending-list">
                    <button onClick={ goToPreviousPath } className="go-back-btn">
                        <i className="fas fa-chevron-left"></i>
                        Back
                    </button>

                    <div className="list-title">
                        <div className="list-title-front page-list-title-front">
                            <h2 className="page-title">Trending</h2>

                            <div className="trending-type-btn">
                                <Link to="/Trending">
                                    <button className="active">Movie</button>
                                </Link>

                                <Link to="TrendingTvShow">
                                    <button>Tv Show</button>
                                </Link>
                            </div>

                            <button className={isDay? "day active" : "day"} onClick={() => switchToDay()}>Day</button>
                            <button className={isDay? "day" : "active day"}  onClick={() => switchToWeek()}>Week</button>
                        </div>

                        <Link to="/Trending">
                            <button className="see-more">See More <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>

                    <div className="fade">
                        <div className="result-list">
                            {MovieTrendingList.map((item) => (
                                <ResultCard item={item} key={item.id} isMovie={true} backDrop={backDrop}/>
                            ))}
                        </div>
                    </div>
                    <CustomPagination setPage={setPage} numOfPages={5}/>
                </div>
           
        // </div>
    )
}

export default MovieTrendingList