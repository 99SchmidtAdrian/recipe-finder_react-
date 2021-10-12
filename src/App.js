import "./App.css";
import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Results from "./components/Results/Results";
import Recipes from "./components/Recipes/Recipes";
import Recipe from "./components/Recipes/Recipe";
import './styles/output.css';
import SuggestRecipe from "./components/Recipes/SuggestRecipe";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Fragment>
      <Router>
        <ScrollToTop>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/recipes" exact component={Recipes} />
          <Route path="/recipe/:keywords" component={Recipe} />
          <Route path="/search/:keywords" component={Results} />
          <Route path="/suggest" exact component={SuggestRecipe} />
        </Switch>
        </ScrollToTop>
      </Router>
    </Fragment>
  );
}

export default App;
