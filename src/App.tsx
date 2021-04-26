import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Episodes from "./pages/Episodes";
import Faq from "./pages/Faq";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/episodes">
        <Episodes />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
    </Router>
  );
}

export default App;
