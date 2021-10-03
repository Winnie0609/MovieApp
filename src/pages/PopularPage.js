import React from 'react'
import { Header, PopularList, Footer } from "../components/allComponent"


function PopularPage() {
    return(
        <>
            <Header />
            <div className="popular-page">
                <div className="margin-container">
                    <PopularList />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PopularPage