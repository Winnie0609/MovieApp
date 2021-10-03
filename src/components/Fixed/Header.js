import React, { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import { Header_Data_One, Header_Data_Two, Header_Data_Three } from "./headerData"
import "../../style/index.css"

function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    useEffect(() => {
        if(sidebar) {
            document.body.classList.add("overflow")
        }
        return () => {
            document.body.classList.remove("overflow")
        }
    }, [sidebar])

    return(
        <nav className={sidebar ? "nav-menu nav-menu-active" : "nav-menu"}>
            <button className="open" onClick={showSidebar}>
                <i className={sidebar ? "fas fa-times" : "fas fa-bars"}></i>
            </button>

            <Link to="/">
                <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="logo" className="logo"/>
            </Link> 

            <div className="profile">
                <img src={process.env.PUBLIC_URL + '/image/user.png'} alt="avatar" className="profile-avatar"/>
                <p className="profile-name">Karl</p>
                <p className="profile-username">@ Karl23</p>
            </div>
            
            <div className="nav-list">
                <div>
                    <ul className="section">
                        {Header_Data_One.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink 
                                        to={item.path} 
                                        onClick={() => window.location.pathname === item.path}
                                        className= { window.location.pathname === item.path ? "active-link" : "link"}
                                        // className="link"
                                        // activeClassName="active-link"
                                    >
                                        {item.icon}
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>

                    <p className="browse">Browse</p>

                    <ul className="section">
                        {Header_Data_Two.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink 
                                        to={item.path} 
                                        className="link"
                                        activeClassName="active-link"
                                    
                                    >
                                        {item.icon}
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <ul className="section">
                        {Header_Data_Three.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} className="link">
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar