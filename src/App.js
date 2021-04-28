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
import Hosting from './components/Hosting';

function App() {
  return (
    <Router>
      <Navigation 
        leftContent={<h4 className="bold-black">LiveHost</h4>}
        rightContent={
          <div className="flex-container">
            <ul className="nav">
                <li className="nav__item"><Link className="nav__link">Website Builder</Link></li>
                <li className="nav__item"><Link className="nav__link">Hosting</Link><img className="nav__dropdown" src={arrow} /></li>
                <li className="nav__item"><Link className="nav__link">Domain</Link><img className="nav__dropdown" src={arrow} /></li>
                <li className="nav__item"><Link className="nav__link">Email</Link><img className="nav__dropdown" src={arrow} /></li>
            </ul>
            <ul className="nav">
                <li className="nav__item"><img className="nav__cart" src={cart} /></li>
                <li className="nav__item"><Link className="nav__link bold">Login</Link></li>
            </ul>
          </div>
        }
      />

      <Switch>
        <Route exact path="/">
          <Hosting />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
