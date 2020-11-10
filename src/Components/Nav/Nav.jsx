import { React, useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import "./Nav.css";

export default function Nav() {
  const [buttonGroup] = useState([
    {
      text: "Доски",
    },
    {
      text: "Участники",
    },
    {
      text: "Настройки",
    },
  ]);
  return (
    <>
      <ButtonGroup
        className="Nav-panel"
        color="primary"
        aria-label="outlined primary button group"
      >
        {buttonGroup.map((button, index) => (
          <Button className="Nav-item">{button.text}</Button>
        ))}
      </ButtonGroup>
    </>
  );
}
