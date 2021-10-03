import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function SignInBlock(){
    const [isSignIn, setIsSignIn] = useState(true)
    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 

    const history = useHistory()

    async function SignIn_API(e) {
        e.preventDefault()

        const response = await fetch("/api/login", {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })

        // console.log(response)
 

        // if(response.ok){
        //     console.log("successfully login")
        // }
        
    }
    
    function Register_API(e) {
        e.preventDefault()

        fetch("/api/register", {
            method: 'POST',
            body: JSON.stringify({
                email: emailReg,
                password: passwordReg
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
     
    }

    function SignUp(){
        setIsSignIn(false)
        // console.log(isSignIn)
    }

    function Login(){
        setIsSignIn(true)
        // console.log(isSignIn)
    }

    const goToPreviousPath = () => {
        history.goBack()
    }

    return(
            <>
                <div className="trending-tv-page"> 
                    <div className="margin-container">
                        <button onClick={ goToPreviousPath } className="go-back-btn">
                            <i className="fas fa-chevron-left"></i>
                            Back
                        </button>

                        <div className="list-title-front page-list-title-front">
                            <h2 className="page-title">Login to A MOVIE. </h2>
                        </div>

                        {isSignIn? 
                        <div className="content">
                            <p className="grey small-word ">Login with</p>
                            <div className="icon">
                                <i className="fab fa-google"></i>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-tumblr"></i>
                            </div>

                            <p className="grey small-word no-margin-bottom">or</p>

                            <form className="login" onSubmit={SignIn_API}>
                                <div className="email small-word">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="password small-word">
                                    <label>Password</label>
                                    <input 
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <button type="submit">Login</button>
                            </form>

                            <p className="small-word">Dont have an account? <span className="flip" onClick={()=> SignUp()}>Create an account.</span></p>
                        </div>
                        :
                        
                        <div className="content">
                            <h1 className="title">Create an account.</h1>
                            <p className="grey small-word">Register with</p>
                            <div className="icon">
                                <i className="fab fa-google"></i>
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-tumblr"></i>
                            </div>

                            <p className="grey small-word no-margin-bottom">or</p>

                            <form className="login" onSubmit={Register_API}>
                                <div className="email small-word">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={emailReg}
                                        onChange={(e) => setEmailReg(e.target.value)}
                                    />
                                </div>

                                <div className="password small-word">
                                    <label>Password</label>
                                    <input 
                                        type="password"
                                        value={passwordReg}
                                        onChange={(e) => setPasswordReg(e.target.value)}
                                    />
                                </div>

                                <button type="submit">Sign Up</button>
                            </form>

                            <p className="small-word">Already have an account? <span className="flip" onClick={()=> Login()}>Sign in.</span></p>
                        </div>
                        }
                    </div>
                </div>


            </>
    )
}

export default SignInBlock