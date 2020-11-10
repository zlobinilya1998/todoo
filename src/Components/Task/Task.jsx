import "../Task/Task.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useState } from "react";

export default function Task({
  text,
  completed,
  deleted,
  index,
  removeTask,
  toggleCompleted,
  toggleDeleteted,
  openHandler,
  taskOpen,
}) {
  return (
    <div className="task">
      <p
        onClick={() => toggleCompleted(index)}
        className={`tooDoo-task ${completed ? "completed" : null} ${
          deleted ? "deleted" : null
        }`}
      >
        #{index + 1} {text}
      </p>
      <div className={deleted ? "deleted" : null}>
        <HighlightOffIcon
          variant="outlined"
          onClick={() => {
            taskOpen(index);
            toggleDeleteted(index);
            setTimeout(() => {
              removeTask(index);
            }, 600);
            openHandler(completed);
          }}
        >
          Удалить
        </HighlightOffIcon>
      </div>
    </div>
  );
}
