import React from "react"
import { Link } from "react-router-dom"

function Jumbotron() {
    return(
        <div>
            <p>Get a movie everydayy. :)</p>
            <p>Get access to maintain your own custom personal lists. Without any Advertisement.</p>
            <Link to="/SignIn">
                <button>Join Us Now !</button>
            </Link>

        </div>
    )
}

export default Jumbotron