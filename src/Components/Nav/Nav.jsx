import { NavLink } from "react-router-dom";

import s from "./Nav.module.css";

export default function Nav() {
  const links = ["Board", "Tasks"];
  return (
    <>
      <div className={s.wrapper}>
        {links.map((button, index) => (
          <NavLink key={index} className={s.link} to={`/${button}`}>
            {button}
          </NavLink>
        ))}
      </div>
    </>
  );
}
