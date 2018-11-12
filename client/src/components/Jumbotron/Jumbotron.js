import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 10, clear: "both", paddingTop: 10, textAlign: "center" }}
    className="jumbotron mt-4 slideDown"
  >
    {children}
  </div>
);

export default Jumbotron;
