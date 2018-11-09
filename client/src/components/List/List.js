import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container fadeIn">
      <ul className="list-group fadeIn">
        {children}
      </ul>
    </div>
  );
};
