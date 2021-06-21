import React from 'react'
import { Link } from "react-router-dom"

function NavBar(){
    return(
        <nav style={{display: "flex"}}>
            <div className="column-left">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="logo" />
                </Link> 

                <ul className="nav-left">
                    <Link to="/Movies" className="link">
                        <li>Movies</li>
                    </Link>

                    <Link to="/TopRated" className="link">
                        <li>Top Rated</li>
                    </Link>

                    <Link to="/" className="link">
                        <li>TV shows</li>
                    </Link>
                </ul>
            </div>

            <div className="column-right">
                <ul>
                    <li className="language">EN</li>

                    <Link to="/Favourite">
                        <li><i className="far fa-heart link"></i></li>
                    </Link>
                    
                    <Link to="/Search">
                        <li><i className="fas fa-search link"></i></li>
                    </Link>

                    <Link to="/SignIn">
                        <li><i className="far fa-user"></i></li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar