import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/nav/Nav";

import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ReviewsPage from "./pages/ReviewsPage";
import NoMatchPage from "./pages/NoMatchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <hr />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/categories">
              <CategoriesPage />
            </Route>
            <Route path="/reviews">
              <ReviewsPage />
            </Route>
            <Route path="*">
              <NoMatchPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
