import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from "react-router-dom"
import { getTvShowTrendingList } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'
import { ResultCard, CustomPagination } from '../allComponent'

function TvShowTrendingList() {
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
            getTvShowTrendingList(page, dispatch, "tvShow_trending_day")
        } else {
            getTvShowTrendingList(page, dispatch, "tvShow_trending_week")
        }
    }, [isDay, page])

    let tvShowTrendingList = state.tvShow_trending_list
    // console.log(tvShowTrendingList)

    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <div className="trending-tv-page"> 
            <div className="margin-container">
                <button onClick={ goToPreviousPath } className="go-back-btn">
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>

                <div className="list-title-front page-list-title-front">
                    <h2 className="page-title">Trending</h2>
                    <div className="trending-type-btn">
                        <Link to="/Trending">
                            <button>Movie</button>
                        </Link>

                        <Link to="TrendingTvShow">
                            <button className="active">Tv Show</button>
                        </Link>
                    </div>
                    
                    <button className={isDay? "day active" : "day"} onClick={() => switchToDay()}>Day</button>
                    <button className={isDay? "day" : "active day"}  onClick={() => switchToWeek()}>Week</button>
                </div>

                {tvShowTrendingList.map((item) => (
                    <ResultCard item={item} key={item.id} isMovie={false}/>
                ))}
                <CustomPagination setPage={setPage} numOfPages={5}/>
            </div>
        </div>
    )
}

export default TvShowTrendingList