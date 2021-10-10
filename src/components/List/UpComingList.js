import React, { useState, useEffect, useContext } from 'react'
import { getList, getUpComingList } from '../../API/getData'
import { GlobalContext } from '../../context/GlobalState'
import { ResultCard } from '../allComponent'

function UpComingList() {
	const { dispatch, state } = useContext(GlobalContext)
	const key = Math.floor(Math.random() * 10000)

	useEffect(() => {
		getUpComingList(dispatch)
		// getList(1, dispatch, "upComing_movie")
	}, [])

	let UpComingList = state.upComing_list
	
	return (
		<div className="up-comming-list"> 
			{/* <div className="list-title"> */}
				<h2>Upcoming</h2>
			{/* </div> */}
			<div className="result-list">
				{UpComingList.map((item, index) => (
					<div className="up-comming-list-item">
						<p className={index <= 2 ? "index index-red" : "index"}>{index + 1}</p>
						<ResultCard item={item} key={`${item.id}${key}`} isMovie={true}/>
					</div>
				))}
			</div>
		</div>
	)
}

export default UpComingList