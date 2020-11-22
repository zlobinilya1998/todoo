import { rerenderTree } from "../../index";
const TOGGLE_COMPLETED = "TOGGLE-COMPLETED";
const TOGGLE_DELETED = "TOGGLE-DELETED";
const ADD_TASK = "ADD-TASK";
const INPUT_TEXT = "INPUT-TEXT";
const CLOSE_ALERT = "CLOSE-ALERT";

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const closeAlert = () => {
        state.alert.open = false;
        rerenderTree();
      };
      if (
        action.text.length < 45 &&
        action.text.length !== 0 &&
        action.text.length > 5
      ) {
        let newObj = {
          text: action.text[0].toUpperCase() + action.text.slice(1),
          completed: false,
          deleted: false,
          taskOpen: true,
        };
        state.questions.push(newObj);
        state.inputText = "";
      } else if (action.text.length === 0) {
        state.alert.text[0] = "Строка не может быть пустой";
        state.alert.open = true;
        setTimeout(closeAlert, 2000);
      } else if (action.text.length > 45) {
        state.alert.text[0] = "Строка слишком длинная!";
        state.alert.open = true;
        setTimeout(closeAlert, 2000);
      } else if (action.text.length < 5) {
        state.alert.text[0] = "Строка слишком короткая!";
        state.alert.open = true;
        setTimeout(closeAlert, 2000);
      }
      return state;
    case INPUT_TEXT:
      state.inputText = action.text;
      return state;
    case TOGGLE_COMPLETED:
      state.questions.map((task, curIdx) => {
        if (action.index === curIdx) {
          state.questions[action.index].completed = !state.questions[
            action.index
          ].completed;
        }
        return task;
      });
      return state;
    case TOGGLE_DELETED:
      state.questions.map((task, curIdx) => {
        if (action.index === curIdx) {
          state.questions[action.index].deleted = !state.questions[action.index]
            .deleted;
        }
        return task;
      });
      return state;
    case CLOSE_ALERT:
      state.alert.open = false;
      return state;
    default:
      return state;
  }
};

export default appReducer;
