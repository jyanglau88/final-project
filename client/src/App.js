import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PetMeds from "./pages/PetMeds";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={PetMeds} />
        <Route exact path="/petmeds" component={PetMeds} />
        <Route exact path="/petmeds/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
