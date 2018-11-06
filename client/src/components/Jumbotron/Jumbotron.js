import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 150, clear: "both", paddingTop: 100, textAlign: "center" }}
    className="jumbotron jumbotron-fluid"
  >
    {children}
  </div>
);

export default Jumbotron;
