import "../Task/Task.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

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
    <div className="task" draggable="true">
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
          className="delete-icon"
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
