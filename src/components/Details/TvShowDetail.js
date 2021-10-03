import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTvShowDetail, getCast, getSimilar, getVideo } from "../../API/getData"
import { CastCarousel, ResultCard, Header } from "../allComponent"

function TvShowDetail() {
    const { id } = useParams()
    const [TvShowDetail, setTvShowDetail] = useState()
    const [Cast, setCast] = useState()
    const [Similar, setSimilar] = useState()
    const [Video, setVideo] = useState()


    useEffect(() => {
        getTvShowDetail(id, setTvShowDetail)
        getCast(id, setCast, "tv")
        getSimilar(id, setSimilar, "tv")
        getVideo(id, setVideo, "tv")
        // console.log(TvShowDetail)
        window.scrollTo(0, 0)
    }, [id])

    return(
        <div>
            <Header/>
            {TvShowDetail ?  
            <>
                <img 
                    style={{width: "200px", marginRight:"30px"}}
                    src={`https://image.tmdb.org/t/p/w200/${TvShowDetail.poster_path}`} 
                    alt={TvShowDetail.title} 
                    onError={(e) => {e.target.onerror = null
                        e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                    }
                />
                <h1>{TvShowDetail.name}</h1>
                <p><i className="fas fa-star"></i> {TvShowDetail.vote_average}</p>
                
                {Video && 
                    <a href={`https://www.youtube.com/watch?v=${Video}`} target="__blank" > 
                        <button style={{width: "200px"}}><i className="fab fa-youtube"></i>Watch the Trailer</button>
                    </a>
                }

                <p>{TvShowDetail.release_date}</p>
                <p>{TvShowDetail.overview}</p>

                <p>genre: </p>
                {TvShowDetail.genres.map((genre) => <p key={genre.name}>{genre.name}</p>)}

                {Cast? 
                    <CastCarousel Cast={Cast}/>
                    :
                    "loading"
                }

                {Similar ? 
                    Similar.map((item) => (
                        <div key={item.id}>
                            <ResultCard item={item} isMovie={false}>
                                <p>{item.title}</p>
                            </ResultCard>
                        </div>
                    ))

                    :
                    "loading"
                }

            </>
            
            : 
            
            "loading"
            }
        </div>
    )
}

export default TvShowDetail