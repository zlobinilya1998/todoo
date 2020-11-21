import {
  Task,
  Tasker,
  AlertWindow,
  Today,
  TooDooEmpty,
} from "../Redux/ComponentsStore";

import s from "./App.module.css";

function App({ state, dispatch }) {
  return (
    <>
      {state.questions === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <div className={s.tooDoo}>
            <Today />
            <Tasker text={state.inputText} dispatch={dispatch} />
            {state.questions.map((task, index) => (
              <Task
                key={index}
                index={index}
                text={task.text}
                completed={task.completed}
                dispatch={dispatch}
              />
            ))}

            <TooDooEmpty tasks={state.questions} />
          </div>
        </>
      )}
      <AlertWindow state={state.alert} dispatch={dispatch} />
    </>
  );
}

export default App;
