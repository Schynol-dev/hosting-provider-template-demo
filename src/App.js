import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './assets/fonts/fonts.css';
import './assets/css/main.css';

import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
