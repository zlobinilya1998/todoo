import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import classes from "../Task/Task.module.css";

export default function Task({
  text,
  completed,
  deleted,
  index,
  removeTask,
  toggleCompleted,
  toggleDeleteted,
  taskOpen,
}) {
  return (
    <div className={classes.task} draggable="true">
      <p
        onClick={() => toggleCompleted(index)}
        className={`${classes.tooDooTask} ${
          completed ? classes.completed : null
        } ${deleted ? classes.deleted : null}`}
      >
        #{index + 1} {text}
      </p>
      <div className={deleted ? classes.deleted : null}>
        <HighlightOffIcon
          className={classes.deleteIcon}
          variant="outlined"
          onClick={() => {
            taskOpen(index);
            toggleDeleteted(index);
            setTimeout(() => {
              removeTask(index);
            }, 600);
          }}
        />
      </div>
    </div>
  );
}
