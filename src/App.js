import React from "react"
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom"
import { HomePage, SearchPage, TopRatedPage, PopularPage, FavouritePage, TrendingPageTvShow , TrendingPagePerson, SignInPage, TrendingePageMovie } from "./pages/allPages"
import { MovieDetail, TvShowDetail } from "./components/allComponent"
import { GlobalProvider } from "./context/GlobalState" 
import "../src/style/index.css"

function App() {
  return (
    <GlobalProvider>
      {/* <Router basename="/movie-app"> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route >
          
          <Route path="/TopRated">
            <TopRatedPage/>
          </Route>

          <Route path="/Trending">
            <TrendingePageMovie/>
          </Route>

          <Route path="/TrendingTvShow">
            <TrendingPageTvShow/>
          </Route>

          <Route path="/TrendingPerson">
            <TrendingPagePerson/>
          </Route>

          <Route path="/Popular">
            <PopularPage/>
          </Route>

          <Route path="/Search">
            <SearchPage/>
          </Route>

          <Route path="/Favourite">
            <FavouritePage/>
          </Route>

          <Route path="/SignIn">
            <SignInPage/>
          </Route>

          <Route path="/Movie/:id" component={ MovieDetail }/>
          <Route path="/TvShow/:id" component={ TvShowDetail }/>
          {/* <Route path="/Person/:id" component={ PersonDetail }/> */}

        </Switch>
      </Router>
    </GlobalProvider>
  )
}

export default App
