import React from 'react'
import { Link } from "react-router-dom"
import { Controls } from "../Controls"

function FavouriteCard({ item }) {
    const isMovie = item.hasOwnProperty("title") ? true : false

    // console.log(item)

    return(
        <div className="favourite-list-item">
            <Link to={isMovie ? `/Movie/${item.id}` : `/TvShow/${item.id}`}>
                <img 
                    src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} 
                    alt={item.title} 
                    onError={(e) => {e.target.onerror = null
                        e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                    }
                />
            </Link>  

            <div>
                <h3>{item.title ? item.title : item.name}</h3>
                <p><i className="fas fa-star"></i> {item.vote_average} </p>
                <p>{item.release_date}</p>
                
            </div>

            <Controls item={item} />
        </div>
    )
}

export default FavouriteCard