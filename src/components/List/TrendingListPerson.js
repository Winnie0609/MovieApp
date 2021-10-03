import React, { useEffect, useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import { getTrendingPeople } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'
import { PersonDetail, CustomPagination } from "../../components/allComponent"

function TrendingListPerson() {
    const { dispatch, state } = useContext(GlobalContext)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getTrendingPeople(page, dispatch)
    },[page])

    let TrendingPeopleList = state.trending_person_list
    // console.log(TrendingPeopleList)

    let history = useHistory()
    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <div className="person-page">
            <div className="margin-container">
                <button onClick={ goToPreviousPath } className="go-back-btn">
                    <i className="fas fa-chevron-left"></i>
                    Back
                </button>

                <div className="list-title-front page-list-title-front">
                    <h1 className="page-title">Popular Person</h1>
                </div>
                {TrendingPeopleList.map((item) => (
                <>
                    <PersonDetail item={item}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} 
                            alt={item.title} 
                            onError={(e) => {e.target.onerror = null
                                e.target.src="https://i.postimg.cc/85XWRWrz/error-image.png"}
                            }
                        />
                    </PersonDetail>
                    <p>{item.name}</p>
                </>
                ))}
                <CustomPagination setPage={setPage} numOfPages={5}/>
            </div>
        </div>
    )
}

export default TrendingListPerson