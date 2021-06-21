import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

function ResultCard({ item }) {
    const { favouriteList, addMovieToFavouriteList, removeMovieFromFavouriteList  } = useContext(GlobalContext)

    let storedMovie = favouriteList.some((m) => m.id === item.id)
    console.log(storedMovie)
    const isFavourite = storedMovie ? "fa fa-heart aria-hidden='true'" : "far fa-heart"

    function checkFavourite() {
        if (storedMovie) {
            removeMovieFromFavouriteList(item.id)
        } else {
            addMovieToFavouriteList(item)
        }
    }

    return(
        <>
            <div key={item.id} style={{display: "flex", alignItems:"center"}} >
                <img 
                    style={{width: "200px", marginRight:"30px"}}
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} 
                    alt={item.title} 
                    onError={(e) => {e.target.onerror = null
                        e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                    }
                />
                
                <div>
                    <h3>{item.title}</h3>
                    <p><i className="fas fa-star"></i> {item.vote_average}</p>
                    <p>{item.release_date}</p>
                </div>

                <button onClick={() => checkFavourite()}>
                    <i className={isFavourite}></i>
                </button>
            </div>
        </>
    )
}

export default ResultCard