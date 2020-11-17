import { NavLink } from "react-router-dom";

import s from "./Nav.module.css";

export default function Nav({ links }) {
  return (
    <>
      <div className={s.wrapper}>
        {links.map((button) => (
          <NavLink className={s.link} to={`/${button}`}>
            {button}
          </NavLink>
        ))}
      </div>
    </>
  );
}
