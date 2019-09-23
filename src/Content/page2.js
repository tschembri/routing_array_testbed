import React from "react";
import { NavLink } from "react-router-dom";

function Content(props) {
  const { haha } = props.location.state;
  const x = "foo";
  return (
    <>
      <p>page 2 {haha}</p>

      <p>{haha}</p>

      <p>{x}</p>

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
