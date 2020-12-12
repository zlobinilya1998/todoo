import { connect } from "react-redux";
import {
  Task,
  Tasker,
  AlertWindow,
  Today,
  TooDooEmpty,
} from "../Redux/ComponentsStore";

import s from "./App.module.css";

function App({ questions, inputText, alert }) {
  return (
    <>
      {questions === 0 ? (
        <p>Loading</p>
      ) : (
        <>
          <div className={s.tooDoo}>
            <Today />
            <Tasker text={inputText} />
            {questions.map((task, index) => (
              <Task
                key={index}
                index={index}
                text={task.text}
                completed={task.completed}
                deleted={task.deleted}
              />
            ))}

            <TooDooEmpty />
          </div>
        </>
      )}
      <AlertWindow state={alert} />
    </>
  );
}

const mapStateToProps = (state) => ({
  questions: state.questions,
  inputText: state.inputText,
  alert: state.alert,
});
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;
