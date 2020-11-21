import PostAddIcon from "@material-ui/icons/PostAdd";
import { Button } from "@material-ui/core";
import { React, useRef } from "react";

import classes from "./tasker.module.css";

export default function Tasker({ text, dispatch }) {
  const inputRef = useRef();

  const addTaskActionCreator = (text) => ({ type: "ADD-TASK", text: text });
  const inputTextActionCreator = (text) => ({ type: "INPUT-TEXT", text: text });

  return (
    <>
      <div className={classes.inputField}>
        <input
          ref={inputRef}
          value={text}
          className={classes.tooDooInput}
          placeholder="Введите название новой задачи"
          onChange={() =>
            dispatch(inputTextActionCreator(inputRef.current.value))
          }
        ></input>
        <Button
          className={classes.tooDooInputButton}
          onClick={() => dispatch(addTaskActionCreator(text))}
        >
          <PostAddIcon>Добавить</PostAddIcon>
        </Button>
      </div>
    </>
  );
}
