// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_FAVOURITE_LIST":
            return {
                ...state,
                favouriteList: [action.payload, ...state.favouriteList]
            }
        
        case "REMOVE_MOVIE_FROM_FAVOURITE_LIST":
            return {
                ...state,
                favouriteList: state.favouriteList.filter((item) => item.id !== action.payload)
            }

        case "GET_MOVIES":
            return {
                ...state,
                top_rated_list: [...action.payload],
                popular_list: [...action.payload],
                // upComing_list : [...action.payload],
            }
            
        case "GET_UPCOMING_LIST":
            return {
                ...state,
                upComing_list: [...action.payload],
        }

        case "GET_MOVIE_TRENDING_LIST":
            return {
                ...state,
                movie_trending_list: [...action.payload]
            }

        case "GET_TVSHOW_TRENDING_LIST":
            return {
                ...state,
                tvShow_trending_list: [...action.payload]
            }

            
        case "GET_PERSON_TRENDING_LIST":
            return {
                ...state,
                trending_person_list: [...action.payload]
            }


        case "GET_NOW_PLAYING":
            return {
                ...state,
                now_playing_list: [...action.payload]
            }

        case "GET_BANNER_MOVIE":
            return {
                ...state,
                banner_movie_list: [...action.payload]
            }

        default:
            return state
    }
}