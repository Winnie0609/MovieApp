import "../../style/index.css"
import React, { useContext, useState } from 'react'
import { useHistory, Link } from "react-router-dom"
import { GlobalContext } from "../../context/GlobalState"
import { FavouriteCard } from "../allComponent" 

function FavoutiteList() {
    const { favouriteList } = useContext(GlobalContext)
    const [type, setType] = useState("favouriteList")
    const [all, setAll] = useState(true)
    const [movie, setMovie] = useState(false)
    const [tvShow, setTvShow] = useState(false)

    const key = Math.floor(Math.random() * 10000)
    // console.log(key)
    const movies = favouriteList.filter((element) => element.hasOwnProperty("title"))
    const tvShows = favouriteList.filter((element) => element.hasOwnProperty("name"))

    function typeChange(event) {
        if (event.target.value === "favouriteList") {
            setType("favouriteList")
            setAll(true)
            setMovie(false)
            setTvShow(false)

        } else if (event.target.value === "movies") {
            setType("movies")
            setAll(false)
            setMovie(true)
            setTvShow(false)

        } else if (event.target.value === "tvShows") {
            setType("tvShows")
            setAll(false)
            setMovie(false)
            setTvShow(true)
        }
    }
    
    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

    return(
        <div className="favourite-page">
            <div className="margin-container">
                <button onClick={ goToPreviousPath } className="go-back-btn">
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>
                
                <div className="page-list-title-front">
                    <h1 className="page-title">Favourite List</h1>

                    <button 
                        className={all? "active all-btn " : "all-btn"} 
                        value="favouriteList" 
                        onClick={(event) => typeChange(event,"value")}
                    >
                        All
                    </button>

                    <button 
                        className={movie? "active movie-btn" : "movie-btn"} 
                        value="movies" onClick={(event) => typeChange(event, "value")}
                    >
                        Movie
                    </button>

                    <button 
                        className={tvShow? "active tvShow-btn" : "tvShow-btn" } 
                        value="tvShows" onClick={(event) => typeChange(event, "value")}
                    >
                        Tv Show
                    </button>
                </div>

                <div className="favourite-list">

                    {favouriteList && favouriteList.length > 0 && type === "favouriteList" ?
                        favouriteList.map((item) => (
                            <FavouriteCard item={item} key={`${item.id}${key}`} />
                        ))

                        :
                        
                        favouriteList && favouriteList.length > 0 && type === "movies" ?
                        movies.map((item) => (
                            <FavouriteCard item={item} key={item.id} />
                        ))
                        
                        :
                        
                        favouriteList && favouriteList.length > 0 && type === "tvShows" ?
                        tvShows.map((item) => (
                            <FavouriteCard item={item} key={item.id} />
                        )) 

                        :
                        <>
                            <h1>Add some film here!</h1>
                            <Link to="/">
                                <button>Explore !</button>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default FavoutiteList