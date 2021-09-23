import './App.css';
import AboutVeganism from './components/AboutVeganism/AboutVeganism';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Asd from './asd';

function App() {

  return (<Router>
      <div className="bg-cover bg-fixed background-img">
          <SearchBar />
          <AboutVeganism />
        <Footer />
      </div>
      <Route path="/asd" component={Asd} />
    </Router>
  );
}

export default App;
