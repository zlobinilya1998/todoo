import {
  toggleCompletedActionCreator,
  toggleDeletedActionCreator,
  deleteTaskActionCreator,
} from "../Redux/app-reducer";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { connect } from "react-redux";

import "../Task/Task.css";

function Task({ text, completed, index, dispatch, deleted }) {
  return (
    <div className="task">
      <p
        onClick={() => dispatch(toggleCompletedActionCreator(index))}
        className={`tooDooTask ${deleted ? "deleted" : ""} ${
          completed ? "completed" : ""
        }`}
      >
        #{index + 1} {text}
      </p>
      <HighlightOffIcon
        className={`deleteIcon ${deleted ? "deleted" : ""}`}
        onClick={() => {
          dispatch(toggleDeletedActionCreator(index));
          setTimeout(() => dispatch(deleteTaskActionCreator(index)), 700);
        }}
        variant="outlined"
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});
const ConnectedTask = connect(null, mapDispatchToProps)(Task);
export default ConnectedTask;
