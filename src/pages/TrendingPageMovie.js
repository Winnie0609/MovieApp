import React from 'react'
import { Link } from 'react-router-dom'
import { Header, MovieTrendingList, Footer } from "../components/allComponent"

function TrendingPageMovie() {
    return(
        <>
            <Header />
            <div className="trending-movie-page">
                <div className="margin-container">
                    <MovieTrendingList />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default TrendingPageMovie