import { useState } from "react";
import Task from "./Components/Task/Task";
import "./App.css";
import Tasker from "./Components/Tasker/tasker";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    "& > * + *": {
      marginTop: theme.spacing(1),
      marginLeft: 50 + "%",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [error, SetError] = useState([`Ошибка`]);
  const [open, setOpen] = useState(false);

  const [tasks, setTasks] = useState([
    {
      text: "Привести делать в порядок",
      completed: false,
      deleted: false,
      taskOpen: true,
    },
    {
      text: "Начать новую жизнь",
      completed: false,
      deleted: false,
      taskOpen: true,
    },
    {
      text: "Построить дом",
      completed: false,
      deleted: false,
      taskOpen: true,
    },
    {
      text: "Посмотреть метод",
      completed: false,
      deleted: false,
      taskOpen: true,
    },
  ]);

  const taskOpen = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) => {
        if (index === curIdx) {
          return {
            ...task,
            taskOpen: !task.taskOpen,
          };
        }
        return task;
      })
    );
  };

  const toggleDeleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) => {
        if (index === curIdx) {
          return {
            ...task,
            deleted: !task.deleted,
          };
        }
        return task;
      })
    );
  };

  const toggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) => {
        if (index === curIdx) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const openHandler = (completed) => {
    setOpen(true);
    SetError(
      completed
        ? "Выполненное задание удалено!"
        : "Удалено невыполненное задание!"
    );
    setTimeout(() => setOpen(false), 2000);
  };

  const removeTask = (index, deleted) => {
    deleted = !deleted;
    setTasks((prevTasks) =>
      prevTasks.filter((task, curIndx) => curIndx !== index)
    );
  };

  const onAddTask = (text) => {
    if (text.length < 45 && text.length !== 0 && text.length > 5) {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          text: text[0].toUpperCase() + text.slice(1),
          completed: false,
        },
      ]);
    } else if (text.length === 0) {
      setOpen(true);
      SetError("Строка не может быть пустой!");
      setTimeout(() => setOpen(false), 2000);
    } else if (text.length > 45) {
      setOpen(true);
      SetError("Строка слишком длинная!");
      setTimeout(() => setOpen(false), 2000);
    } else if (text.length < 5) {
      setOpen(true);
      SetError("Строка слишком короткая!");
      setTimeout(() => setOpen(false), 2000);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {error}
          </Alert>
        </Collapse>
      </div>

      <div className="tooDoo">
        <div className="tooDoo-day">
          <strong>Сегодня </strong>
          <p>
            {new Date().toLocaleDateString([], {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </p>
        </div>

        <Tasker onAddTask={onAddTask} />

        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            deleted={task.deleted}
            taskOpen={taskOpen}
            toggleCompleted={toggleCompleted}
            toggleDeleteted={toggleDeleted}
            removeTask={removeTask}
            openHandler={openHandler}
          />
        ))}

        {tasks.length === 0 ? (
          <p className="tooDoo-empty">Ваш список задач пуст!</p>
        ) : null}
      </div>
    </>
  );
}

export default App;
