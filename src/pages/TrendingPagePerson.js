import React from 'react'
import { Link } from 'react-router-dom'
import { Header, TrendingListPerson, Footer } from "../components/allComponent"

function TrendingPagePerson() {
    return(
        <>
            <Header />
                <TrendingListPerson/>
            <Footer/>


        </>
    )
}

export default TrendingPagePerson