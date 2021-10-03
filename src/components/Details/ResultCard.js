import React, { useContext } from 'react'
import { GlobalContext } from "../../context/GlobalState"
import { Link } from "react-router-dom"


function ResultCard({ item, isMovie, backDrop }) {
    const { favouriteList, addMovieToFavouriteList, removeMovieFromFavouriteList } = useContext(GlobalContext)

    let storedMovie = favouriteList.some((m) => m.id === item.id)
    // console.log(storedMovie)
    const isFavourite = storedMovie ? "fa fa-heart aria-hidden='true'" : "far fa-heart"

    function checkFavourite() {
        if (storedMovie) {
            removeMovieFromFavouriteList(item.id)
        } else {
            addMovieToFavouriteList(item)
        }
    }

    return(
        <div> 
            <div className="result-card">
                <Link to={isMovie ? `/Movie/${item.id}` : `/TvShow/${item.id}`}>
                    <img 
                        className="result-card-img"
                        src={backDrop? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : `https://image.tmdb.org/t/p/w200/${item.poster_path}`} 
                        alt={item.title} 
                        onError={(e) => {e.target.onerror = null
                            e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                        }
                    />
                </Link>
                <div className="result-card-bar">
                    <div className="result-card-info">
                        <Link className="result-detail-link" to={isMovie ? `/Movie/${item.id}` : `/TvShow/${item.id}`}>
                            <p className="result-card-title">{item.title ? item.title : item.name}</p>
                        </Link>
                        <p className="result-card-vote"><i className="fas fa-star"></i> {item.vote_average}</p>
                        <p className="result-card-date">{item.release_date}</p>
                    </div>

                    <button className ="fav-btn" onClick={() => checkFavourite()}>
                        <i className={isFavourite}></i>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ResultCard