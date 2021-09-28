import './App.css';
import { React } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Results from './components/Results/Results';
import Recipes from './components/Recipes/Recipes'
function App() {


  return (<Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/search/:keywords" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
