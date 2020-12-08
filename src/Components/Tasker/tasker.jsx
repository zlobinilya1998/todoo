import PostAddIcon from "@material-ui/icons/PostAdd";
import { Button } from "@material-ui/core";
import { React, useRef } from "react";

import classes from "./tasker.module.css";
import { connect } from "react-redux";
import {
  inputTextActionCreator,
  addTaskActionCreator,
} from "../Redux/app-reducer";

function Tasker({ inputText, changeText, addTask }) {
  const inputRef = useRef();

  return (
    <>
      <div className={classes.inputField}>
        <input
          ref={inputRef}
          value={inputText}
          className={classes.tooDooInput}
          placeholder="Place for new task"
          onChange={() => changeText(inputRef.current.value)}
        ></input>
        <Button
          className={classes.tooDooInputButton}
          onClick={() => addTask(inputText)}
        >
          <PostAddIcon>Добавить</PostAddIcon>
        </Button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  inputText: state.inputText,
});
const mapDispatchToProps = (dispatch) => ({
  changeText: (text) => dispatch(inputTextActionCreator(text)),
  addTask: (text) => dispatch(addTaskActionCreator(text)),
});
const mergeProps = (state, dispatch) => ({
  ...state,
  ...dispatch,
});
const ConnectedTasker = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Tasker);
export default ConnectedTasker;
