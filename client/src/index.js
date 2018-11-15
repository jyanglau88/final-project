import React from "react";
import ReactDOM from "react-dom";

//used before I added auth0
//import App from "./App";
//ReactDOM.render(<App />, document.getElementById("root"));

//auth0
import Routes from "../src/pages/Login/Routes";
ReactDOM.render(<Routes />, document.getElementById("root"));