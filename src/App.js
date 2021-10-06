import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
