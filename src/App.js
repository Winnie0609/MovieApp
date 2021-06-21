import React from "react"
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom"
import { HomePage, SearchPage, FavouritePage, TopRatedPage } from "./pages/allPages"
import { GlobalProvider } from "./context/GlobalState" 

function App() {
  return (
    <GlobalProvider>
      {/* <Router basename="/movie-app"> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route >

          <Route path="/Search">
            <SearchPage/>
          </Route>

          <Route path="/TopRated">
            <TopRatedPage/>
          </Route>

          <Route path="/Movies">
            <h1>Movie Page</h1>
          </Route>

          <Route path="/Favourite">
            <FavouritePage/>
          </Route>

          <Route path="/SignIn">
            <h1>SignIn Page</h1>
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App
