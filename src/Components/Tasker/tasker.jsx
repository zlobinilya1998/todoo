import { Button, Input } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import PostAddIcon from "@material-ui/icons/PostAdd";

import classes from "./tasker.module.css";

export default function Tasker({ onAddTask }) {
  const [text, SetText] = useState("");

  useEffect(() => console.log(`Стейт ${text}`));
  const handleClick = (e) => {
    const value = e.currentTarget.value;
    SetText(value);
  };

  const addTask = () => {
    onAddTask(text);
    SetText("");
  };
  const handleKey = (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  };

  return (
    <>
      <div className={classes.inputField}>
        <Input
          value={text}
          className={classes.tooDooInput}
          placeholder="Введите название новой задачи"
          onChange={handleClick}
          onKeyUp={handleKey}
        ></Input>
        <Button
          className={classes.tooDooInputButton}
          onClick={() => addTask(text)}
        >
          <PostAddIcon>Добавить</PostAddIcon>
        </Button>
      </div>
    </>
  );
}
