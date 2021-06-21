import React, { useState, useEffect } from 'react'
import { ResultCard } from './allComponent'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function TopRatedMovie() {
    const [TopRatedMovies, setTopRatedMovies] = useState([])
    const top_rated_movie_url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`

    async function fetchTopRatedMovies() {
        const res = await fetch(top_rated_movie_url)
        const data = await res.json()
        setTopRatedMovies(data.results)
        console.log(TopRatedMovies)
    }

    useEffect(() => {
        fetchTopRatedMovies()
    }, [])
    
    return (
        <>
            {TopRatedMovies.map((item) => (
                <ResultCard item={item} key={item.id}/>
            ))}
        </>
    )
}

export default TopRatedMovie