import React, {useState} from "react"
import { ResultCard } from "../components/allComponent"

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

function Search() {
    const [ query, setQuery ] = useState("")
    const [ SearchMovieResult, setSearchMovieResult ] = useState([])
    
    async function searchMovies(e) {
        e.preventDefault()
        const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`

        try {
            const res = await fetch(url)
            const data = await res.json()
            if(data.results) {
                setSearchMovieResult(data.results)
            }
        }

        catch(err) {
            console.error(err)
        }
    }

    return(
        <>
            <form onSubmit={searchMovies}>
                <input 
                    type="text"
                    placeholder="Search a movie for today..."
                    name={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {SearchMovieResult.length > 0 && (
                SearchMovieResult.map((item) => (
                    <ResultCard item={item} key={item.id}/>
                ))
            )}
        </>
    )
}

export default Search