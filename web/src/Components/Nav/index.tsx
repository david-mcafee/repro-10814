import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ top: 0, bottom: 0 }}>
      <div style={{ width: "100%" }}>
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "50px",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/SessionSection2">SessionSection2</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
