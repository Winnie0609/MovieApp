const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

export async function getList(page, dispatch, type) {
    let api = ""

    const top_rated_movie_url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    const top_rated_tvShows_url = `${API_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`

    const popular_movie_url = `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    const popular_tvShows_url = `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`

    if (type === "top_rated_movie") {
        api = top_rated_movie_url
    } else if (type === "top_rated_tvShows") {
        api = top_rated_tvShows_url
    } else if (type === "popular_movie") {
        api = popular_movie_url
    } else if (type === "popular_tvShows") {
        api = popular_tvShows_url
    } 

    const res = await fetch(api)
    const result = await res.json()

    const data = result.results
    // console.log(data)

    dispatch({ type: "GET_MOVIES", payload: data })
}


// ------ UPCOMING MOVIE ------//

export async function getUpComingList(dispatch) {

    const upComing_movie_url = `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`

    const res = await fetch(upComing_movie_url)
    const result = await res.json()
    const data = result.results

    dispatch({ type: "GET_UPCOMING_LIST", payload: data })
}


// ------ TRENDING MOVIE ------//

export async function getMovieTrendingList(page, dispatch, type) {

    let api = ""

    const movie_trending_day_url = `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`
    const movie_trending_week_url = `${API_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`

    if (type === "movie_trending_day") {
        api = movie_trending_day_url
    } else if (type === "movie_trending_week") {
        api = movie_trending_week_url
    }

    const res = await fetch(api)
    const result = await res.json()
    // console.log(result.results)
    const data = result.results

    dispatch({ type: "GET_MOVIE_TRENDING_LIST", payload: data })
}

// ------ TRENDING TVSHOW ------//

export async function getTvShowTrendingList(page, dispatch, type) {

    let api = ""

    const tvShow_trending_day_url = `${API_URL}/trending/tv/day?api_key=${API_KEY}&language=en-US&page=${page}`
    const tvShow_trending_week_url = `${API_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US&page=${page}`

    if (type === "tvShow_trending_day") {
        api = tvShow_trending_day_url
    } else if (type === "tvShow_trending_week") {
        api = tvShow_trending_week_url
    }

    const res = await fetch(api)
    const result = await res.json()
    // console.log(result.results)
    const data = result.results

    dispatch({ type: "GET_TVSHOW_TRENDING_LIST", payload: data })
}

// ------ TRENDING PERSON ------//

export async function getTrendingPeople(page, dispatch) {

    const tvShow_trending_person_url = `${API_URL}/trending/person/day?api_key=${API_KEY}&language=en-US&page=${page}`

    const res = await fetch(tvShow_trending_person_url)
    const result = await res.json()
    // console.log(result.results)
    const data = result.results

    dispatch({ type: "GET_PERSON_TRENDING_LIST", payload: data })
}

//------ LATEST(trailers) -----//

export async function getNowPlaying(dispatch) {

    const movie_now_playing_url = `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`

    const res = await fetch(movie_now_playing_url)
    const result = await res.json()
    // console.log(result.results)
    const data = (result.results).slice(10, 15)

    dispatch({ type: "GET_NOW_PLAYING", payload: data })
}

// ------ BANNER MOVIE -----//

export async function getBannerMovie(dispatch) {

    const banner_movie_url = `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`
    const res = await fetch(banner_movie_url)
    const result = await res.json()
    const data = result.results

    dispatch({ type: "GET_BANNER_MOVIE", payload: data })
}

// ------ DETAILS ------//

export async function getMovieDetail(id, setMovieDetail) {
    const movie_detail_url = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    
    const res = await fetch(movie_detail_url)
    const data = await res.json()
    // console.log(data)
    
    setMovieDetail(data)
}

export async function getTvShowDetail(id, setTvShowDetail) {
    const tvShow_detail_url = `${API_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`

    const res = await fetch(tvShow_detail_url)
    const data = await res.json()
    // console.log(data)

    setTvShowDetail(data)
}

export async function getCast(id, setCast, type) {
    const cast_url = `${API_URL}/${type}/${id}/credits?api_key=${API_KEY}`

    const res = await fetch(cast_url)
    const data = await res.json()
    setCast(data.cast)
    // console.log(cast_url)
}

export async function getSimilar(id, setSimilar, type) {
    const similar_url = `${API_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`

    const res = await fetch(similar_url)
    const data = await res.json()
    const SimilarSlice = (data.results).slice(0, 5)
    setSimilar(SimilarSlice)
    // setSimilar(data.results)
}

export async function getVideo(id, setVideo, type) {
    const video_url = `${API_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`

    const res = await fetch(video_url)
    const data = await res.json()
    if(data.results[0]){
        setVideo(data.results[0]?.key)
    }
}