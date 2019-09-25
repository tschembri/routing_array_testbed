import React from "react";
import { NavLink } from "react-router-dom";

function Content(props) {
  console.log("page1", props);
  return (
    <>
      <p>page 2 </p>

      <NavLink
        to={{
          pathname: "/page1",
          state: {
            haha1: "lol"
          }
        }}
      >
        Goto page 1
      </NavLink>
    </>
  );
}

export default Content;
