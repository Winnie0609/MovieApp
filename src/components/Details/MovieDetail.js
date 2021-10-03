import React, { useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getCast, getMovieDetail, getSimilar, getVideo } from "../../API/getData"
import { CastCarousel, ResultCard, Header } from "../allComponent"

function MovieDetail() {

    const { id } = useParams()
    const [MovieDetail, setMovieDetail] = useState()
    const [Cast, setCast] = useState()
    const [Similar, setSimilar] = useState()
    const [Video, setVideo] = useState()

    useEffect(() => {
        getMovieDetail(id, setMovieDetail)
        getCast(id, setCast, "movie")
        getSimilar(id, setSimilar, "movie")
        getVideo(id, setVideo, "movie")
        // console.log(Video)
        window.scrollTo(0, 0)
    }, [id])

    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

    return(
        <div className="detail-page">
            <Header/>
            <div className="margin-container">
                <button onClick={ goToPreviousPath } className="go-back-btn">
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>

                {MovieDetail ?  
                <>
                    <img 
                        style={{width: "200px", marginRight:"30px"}}
                        src={`https://image.tmdb.org/t/p/w200/${MovieDetail.poster_path}`} 
                        alt={MovieDetail.title} 
                        onError={(e) => {e.target.onerror = null
                            e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                        }
                    />
                    <h1>{MovieDetail.title}</h1>
                    <h1>{MovieDetail.name}</h1>

                    {Video && 
                        <a href={`https://www.youtube.com/watch?v=${Video}`} target="__blank" > 
                            <button style={{width: "200px"}}><i className="fab fa-youtube"></i>Watch the Trailer</button>
                        </a>
                    }

                    <p><i className="fas fa-star"></i> {MovieDetail.vote_average}</p>
                    <p>{MovieDetail.release_date}</p>
                    <p>{MovieDetail.overview}</p>

                    <p>Genre: </p>
                    {MovieDetail.genres.map((genre) => <p key={genre.name}>{genre.name}</p>)}
                    <p>runtime : {MovieDetail.runtime ? MovieDetail.runtime : 0} min</p>
                    <p>Budget : {MovieDetail.budget ? MovieDetail.budget : 0}</p>

                    {Cast? 
                        <CastCarousel Cast={Cast}/>
                        :
                        "loading"
                    }

                    {Similar ? 
                        Similar.map((item) => (
                            <div key={item.id}>
                                <ResultCard item={item} isMovie={true}>
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
        </div>
    )
}

export default MovieDetail