import React from 'react'
import { Controls } from "./Controls"

function FavouriteCard({ item }) {
    return(
        <div style={{display: "flex", alignItems:"center"}} >
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

            <Controls item={item} />
        </div>
    )
}

export default FavouriteCard