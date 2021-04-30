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
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navigation 
        leftContent={<h4 className="bold-black">LiveHost</h4>}
        rightContent={
          <div className="flex-container">
            <ul className="list-inline">
                <li className="list-inline__item"><Link to="#" className="list-inline__link">Website Builder</Link></li>
                <li className="list-inline__item"><Link to="#" className="list-inline__link">Hosting</Link><img className="list-inline__dropdown" src={arrow} alt="arrow down" /></li>
                <li className="list-inline__item"><Link to="#" className="list-inline__link">Domain</Link><img className="list-inline__dropdown" src={arrow} alt="arrow down" /></li>
                <li className="list-inline__item"><Link to="#" className="list-inline__link">Email</Link><img className="list-inline__dropdown" src={arrow} alt="arrow down" /></li>
            </ul>
            <ul className="list-inline">
                <li className="list-inline__item"><img className="list-inline__cart" src={cart} alt="cart" /></li>
                <li className="list-inline__item"><Link to="#" className="list-inline__link bold">Login</Link></li>
            </ul>
          </div>
        }
      />

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
