import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import {
  toggleCompletedActionCreator,
  toggleDeletedActionCreator,
} from "../Redux/app-reducer";
import { connect } from "react-redux";
import classes from "../Task/Task.module.css";

function Task({
  text,
  completed,
  index,
  toggleCompleted,
  toggleDeleted,
  deleted,
  dispatch,
}) {
  return (
    <div className={classes.task}>
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
          onClick={() => dispatch(toggleDeletedActionCreator(index))}
          variant="outlined"
        />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});
const ConnectedTask = connect(null, mapDispatchToProps)(Task);
export default ConnectedTask;
