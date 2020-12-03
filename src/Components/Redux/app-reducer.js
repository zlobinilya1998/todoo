import { types } from "./types";
import { rerenderTree } from "../../index";

const appReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      const closeAlert = () => {
        state.alert.open = false;
        rerenderTree();
      };
      if (
        action.payload.length < 45 &&
        action.payload.length !== 0 &&
        action.payload.length > 5
      ) {
        let newObj = {
          payload: action.payload[0].toUpperCase() + action.payload.slice(1),
          completed: false,
          deleted: false,
          taskOpen: true,
        };
        state.questions.push(newObj);
        state.inputpayload = "";
      } else if (action.payload.length === 0) {
        state.alert.payload[0] = "Строка не может быть пустой";
        state.alert.open = true;
        setTimeout(closeAlert, 2000);
      } else if (action.payload.length > 45) {
        state.alert.payload[0] = "Строка слишком длинная!";
        state.alert.open = true;
        setTimeout(closeAlert, 2000);
      } else if (action.payload.length < 5) {
        state.alert.payload[0] = "Строка слишком короткая!";
        state.alert.open = true;
        setTimeout(closeAlert, 2000);
      }
      return state;
    case types.INPUT_payload:
      state.inputpayload = action.payload;
      return state;
    case types.TOGGLE_COMPLETED:
      state.questions.map((task, curIdx) => {
        if (action.index === curIdx) {
          state.questions[action.index].completed = !state.questions[
            action.index
          ].completed;
        }
        return task;
      });
      return state;
    case types.TOGGLE_DELETED:
      state.questions.map((task, curIdx) => {
        if (action.index === curIdx) {
          state.questions[action.index].deleted = !state.questions[action.index]
            .deleted;
        }
        return task;
      });
      return state;
    case types.CLOSE_ALERT:
      state.alert.open = false;
      return state;
    default:
      return state;
  }
};

export default appReducer;
