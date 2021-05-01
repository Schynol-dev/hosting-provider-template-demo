import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './assets/fonts/fonts.css';
import './assets/css/main.css';

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
