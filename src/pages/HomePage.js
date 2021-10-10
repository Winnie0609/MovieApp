import React from 'react'
import { Header, BannerMovie, PopularList, MovieTrendingList, LatestTrailer, UpComingList, Footer } from "../components/allComponent"
import "../style/index.css"

function HomePage() {
	return(
		<>
			<Header />
			<div className="margin-container">
				<div className="greeting">
						<h1 className="greeting-text">Welcome Back, Karl !</h1>
						<p className="greeting-sub">A Movie A Day, Keeps the Doctors Away.</p> 
				</div>
				<BannerMovie/>
					
				<div className="home-column column">
					<div className="home-row-one">
						<div className="home-popular">
							<PopularList />
						</div>
						<div className="home-trending">
							<MovieTrendingList backDrop="true"/>
						</div>
					</div>
					<div className="home-row-two">
						<UpComingList />
					</div>
				</div>
				<LatestTrailer />
			</div>

			<Footer />
		</>
	)
}

export default HomePage