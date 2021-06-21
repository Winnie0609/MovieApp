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

        default:
            return state
    }
}