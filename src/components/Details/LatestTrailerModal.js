import React, { useState, useEffect } from 'react'
import { getVideo } from '../../API/getData'
import ModalVideo from "react-modal-video"
import '../../style/modal-video.scss'

function LatestTrailerModal({ children, item }) {
    const [isOpen, setOpen] = useState(false)
    const [video, setVideo] = useState()

    useEffect(() => {
        getVideo(item.id, setVideo, "movie")
    }, [])

    // console.log(video)

    return(
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={video} onClose={() => setOpen(false)} />
            <button className="btn-primary" onClick={()=> setOpen(true)}>
                {children}
            </button>
        </>
    )
}

export default LatestTrailerModal