import { connect } from "react-redux";
import { closeAlertActionCreator } from "../Redux/app-reducer";
import { Alert } from "@material-ui/lab";
import Collapse from "@material-ui/core/Collapse";

import "./AlertWindow.css";

function AlertWindow({ alertStatus, alertText, closeAlert }) {
  return (
    <>
      <div className="alert-size" onClick={() => closeAlert()}>
        <Collapse in={alertStatus}>
          <Alert severity="error">{alertText}</Alert>
        </Collapse>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  alertStatus: state.alert.open,
  alertText: state.alert.text,
});
const mapDispatchToProps = (dispatch) => ({
  closeAlert: () => dispatch(closeAlertActionCreator()),
});
const ConnectedAlertWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertWindow);
export default ConnectedAlertWindow;
