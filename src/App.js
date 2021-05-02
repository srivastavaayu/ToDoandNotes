import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/All.css";
import Home from "./snippets/Home";
import Authenticator from "./snippets/Authenticator";
import ToDos from "./snippets/ToDos";
import Notes from "./snippets/Notes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Authenticator" component={Authenticator} />
        <Route path="/ToDos" component={ToDos} />
        <Route path="/Notes" component={Notes} />
      </Switch>
    </div>
  );
}

export default App;
