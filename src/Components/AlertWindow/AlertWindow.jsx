import { Alert } from "@material-ui/lab";
import Collapse from "@material-ui/core/Collapse";

import "./AlertWindow.css";

export default function AlertWindow({ state, dispatch }) {
  const closeAlertActionCreator = () => ({ type: "CLOSE-ALERT" });
  return (
    <div
      className="alert-size"
      onClick={() => dispatch(closeAlertActionCreator())}
    >
      <Collapse in={state.open}>
        <Alert severity="error">{state.text}</Alert>
      </Collapse>
    </div>
  );
}
