import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './assets/fonts/fonts.css';
import './assets/css/main.css';
import arrow from './assets/icons/arrow-down.svg';
import cart from './assets/icons/cart.svg';

import Navigation from './components/Navigation';
import DropdownNav from './components/DropdownNav';
import Hosting from './components/Hosting';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <DropdownNav />

      <Switch>
        <Route exact path="/">
          <Hosting />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
