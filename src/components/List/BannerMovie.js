import React, { useState, useEffect, useContext } from 'react'
import { getBannerMovie } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'
import { ResultCard } from '../allComponent'
import "../../style/index.css"

function BannerMovie() {
    const { dispatch, state} = useContext(GlobalContext)
    const [num, setNum] = useState(2)

    let BannerMovie = state.banner_movie_list

    useEffect(() => {
        getBannerMovie(dispatch)
        setNum(Math.floor(Math.random() * 20))
    }, [])

    const banner = BannerMovie.filter((item, index) => index === num)
    // console.log(banner)
    
    return (
        <div className="banner-container"> 
            {banner? banner.map((item) => (
                <>  
                    <img 
                        className="banner-movie"
                        src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`} 
                        alt={item.title} 
                        onError={(e) => {e.target.onerror = null
                            e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                        }
                    />
                    <div className="banner-info">
                        <p className="banner-info-title">{item.title}</p>
                        <p className="banner-info-overview">{item.overview}</p>
                    </div>
                    
                </>
            ))
           
            :

            "loading"
            }
        </div>
    )
}

export default BannerMovie