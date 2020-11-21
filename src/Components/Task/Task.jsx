import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import classes from "../Task/Task.module.css";

export default function Task({ text, completed, deleted, index, dispatch }) {
  const toggleCompletedActionCreator = (index) => ({
    type: "TOGGLE-COMPLETED",
    index: index,
  });
  const toggleDeletedActionCreator = (index) => ({
    type: "TOGGLE-DELETED",
    index: index,
  });
  return (
    <div className={classes.task} draggable="true">
      <p
        onClick={() => dispatch(toggleCompletedActionCreator(index))}
        className={`${classes.tooDooTask} ${
          completed ? classes.completed : null
        } ${deleted ? classes.deleted : null}`}
      >
        #{index + 1} {text}
      </p>
      <div className={deleted ? classes.deleted : null}>
        <HighlightOffIcon
          className={classes.deleteIcon}
          onClick={() => dispatch(toggleDeletedActionCreator(index))}
          variant="outlined"
        />
      </div>
    </div>
  );
}
