import "./App.css";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Lenguajes from "./pages/Lenguajes";
import Hobbies from "./pages/Hobbies";
import GitHub from "./pages/GitHub";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
        <Navbar />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/lenguajes" component={Lenguajes} />
                <Route path="/hobbies" component={Hobbies} />
                <Route path="/github" component={GitHub} />
              </Switch>   
      </Router>
      <Footer />
    </>
  );
}

export default App;
