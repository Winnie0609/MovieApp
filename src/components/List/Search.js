import "../../style/index.css"
import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import { ResultCard } from "../../components/allComponent"

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

    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

    return(
        <div className="search-page">
            <div className="margin-container">
                <button onClick={ goToPreviousPath } className="go-back-btn">
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>
                
                <div className="page-list-title-front">
                    <h1 className="page-title">Search</h1>
                </div>

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
                        <ResultCard item={item} key={item.id} isMovie={true}/>
                    ))
                )}
            </div>
        </div>
        
    )
}

export default Search