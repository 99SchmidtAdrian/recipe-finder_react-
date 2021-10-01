import "./App.css";
import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Results from "./components/Results/Results";
import Recipes from "./components/Recipes/Recipes";
import './styles/output.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/search/:keywords" component={Results} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
