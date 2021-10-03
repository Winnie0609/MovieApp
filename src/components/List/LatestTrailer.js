import React, { useEffect,useContext } from 'react'
import { LatestTrailerModal } from "../allComponent"
import { getNowPlaying } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'

function LatestTrailer() {
    const { dispatch, state } = useContext(GlobalContext)

    useEffect(() => {
        getNowPlaying(dispatch)
    }, [])

    let MovieNowPlayingList = state.now_playing_list
    // console.log(MovieNowPlayingList)

    return(
        <div className="latest-trailer-list">
            <h2>Latest Trailers</h2>

            <div className="video-list">
                {MovieNowPlayingList.map((item) => (
                    <>
                        <div className="video-item ">
                            <LatestTrailerModal item={item} key={item.id}>
                                <div className="img-wrap">
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} 
                                        alt={item.title} 
                                        onError={(e) => {e.target.onerror = null
                                            e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                                        }
                                    />
                                    <div className="play-overlay">
                                        <i className="fas fa-play-circle" id="play-icon"></i>
                                    </div>
                                </div>
                            </LatestTrailerModal>
                            <p className="video-info-title">{item.title}</p>
                            <p className="video-info-date">{item.release_date}</p>
                        </div>
                    </>    
                    ))}
            
            </div>
        </div>
    )
}

export default LatestTrailer