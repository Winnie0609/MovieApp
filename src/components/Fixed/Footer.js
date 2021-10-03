import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="grid">
                    <div className="footer-head">

                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/image/logo.png'} alt="logo" className="footer-logo"/>
                        </Link> 

                        <div className="social-icon">
                            <a href="/"><i className="fab fa-google"></i></a>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                        </div>
                        
                        {/* <Link to="/">
                        <p>Sign Up</p>
                        </Link>  */}
                    </div>
                    
                    <div className="footer-info">
                        <div className="column two">
                            <a href="/">About us</a>
                            <a href="/">Contact us</a>
                            <a href="/">Support Forum</a>
                        </div>

                        <div className="column three">
                            <a href="/">Terms of Use</a>
                            <a href="/">API Terms of Use</a>
                            <a href="/">Privacy Policy</a>
                        </div>

                        <div className="column four">
                            <a href="/">FAQ</a>
                            <a href="/">Help Center</a>
                            <a href="/">Cookie Preferences</a>
                        </div>
                    </div>
                </div>
            </div>
            <p>© Copyright 2020 A Movie. All rights reserved.</p>
        </footer>
    )
}

export default Footer