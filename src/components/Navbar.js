import React from "react";

const Navbar = ({ brandName, children }) => {
  return (
    <nav className="navbar">
      <span className="brand">{brandName}</span>
      <div className="actions">{children}</div>
    </nav>
  );
};

export default Navbar;
