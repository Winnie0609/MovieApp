import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState"
import { FavouriteCard } from "../components/allComponent" 

function FavoutiteList() {
    const { favouriteList } = useContext(GlobalContext)

    return(
        <>
            <h1>Favourite List</h1>

            {favouriteList.length > 0 ?
            favouriteList.map((item) => (
                <FavouriteCard item={item} key={item.id} type="favouriteList"/>
            ))
        
            :
            
            <h2>No movie here.</h2>
            }
        </>
    )
}

export default FavoutiteList