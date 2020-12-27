import React from "react";
import "./Animation.css";
import { useState } from "react";
import { Transition } from "react-transition-group";

export default function Animation() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <Transition
        in={toggle}
        timeout={{
          enter: 1000,
          exit: 700,
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => <div className={`animation ${state}`}>{state}</div>}
      </Transition>
    </>
  );
}
