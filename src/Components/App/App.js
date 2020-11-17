import { useState } from "react";

import {
  Task,
  Tasker,
  AlertWindow,
  Today,
  TooDooEmpty,
} from "../../ComponentsStore";

import classes from "./App.module.css";

function App({ questions }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(["Ошибка"]);
  const [tasks, setTasks] = useState(questions);

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

  const removeTask = (index, deleted) => {
    deleted = !deleted;
    setTasks((prevTasks) =>
      prevTasks.filter((task, curIndx) => curIndx !== index)
    );
  };
  const errorText = (text) => {
    setOpen(true);
    setError(text);
    setTimeout(() => setOpen(false), 2000);
  };
  const onAddTask = (text) => {
    if (text.length < 45 && text.length !== 0 && text.length > 5) {
      setTasks((prevTasks) => {
        console.log(tasks);
        return [
          ...prevTasks,
          {
            text: text[0].toUpperCase() + text.slice(1),
            completed: false,
            deleted: false,
            taskOpen: true,
          },
        ];
      });
    } else if (text.length === 0) {
      errorText("Строка не может быть пустой");
    } else if (text.length > 45) {
      errorText("Строка слишком длинная!");
    } else if (text.length < 5) {
      errorText("Строка слишком короткая!");
    }
  };

  return (
    <>
      {tasks === 0 ? (
        <p>Loading</p>
      ) : (
        <div className={classes.tooDoo}>
          <Today />
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
            />
          ))}

          <TooDooEmpty tasks={tasks} />
        </div>
      )}
      <AlertWindow setOpen={() => setOpen()} error={error} open={open} />
    </>
  );
}

export default App;
