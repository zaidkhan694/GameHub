import Games from "./components/Games";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";

function App() {
  return (
   <>
   <Router>
  <Navbar/>
  <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
            <Games/>
          </Route>
        </Switch>
  </div>
  </Router>
   </>
  );
}

export default App;
