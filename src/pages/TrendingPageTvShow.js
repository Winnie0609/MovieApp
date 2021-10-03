import React from 'react'
import { Link } from 'react-router-dom'
import { Header, TvShowTrendingList, Footer } from "../components/allComponent"

function TrendingPageTvShow() {
    return(
        <>
            <Header />
            <TvShowTrendingList/>
            <Footer/>
        </>
    )
}

export default TrendingPageTvShow