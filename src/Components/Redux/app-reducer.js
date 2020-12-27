import { types } from "./types";

const initialState = {
  alert: {
    open: false,
    text: "Ошибка",
  },
  inputText: "",
  questions: [
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
  ],
};

const appReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    alert: { ...state.alert },
    questions: [...state.questions],
  };
  stateCopy.questions = stateCopy.questions.map(
    (elem, index) => (elem = { ...state.questions[index] })
  );

  switch (action.type) {
    case types.ADD_TASK:
      if (
        action.payload.length < 45 &&
        action.payload.length !== 0 &&
        action.payload.length > 5
      ) {
        let newObj = {
          text: action.payload[0].toUpperCase() + action.payload.slice(1),
          completed: false,
          deleted: false,
          taskOpen: true,
        };
        stateCopy.questions.push(newObj);
        stateCopy.inputText = "";
        return stateCopy;
      } else if (action.payload.length === 0) {
        stateCopy.alert.text = "Строка не может быть пустой";
        stateCopy.alert.open = true;
        return stateCopy;
      } else if (action.payload.length > 45) {
        stateCopy.alert.text = "Строка слишком длинная!";
        stateCopy.alert.open = true;
        return stateCopy;
      } else if (action.payload.length <= 5) {
        stateCopy.alert.text = "Строка слишком короткая!";
        stateCopy.alert.open = true;
        return stateCopy;
      }
    // eslint-disable-next-line
    case types.INPUT_TEXT:
      stateCopy.inputText = action.payload;
      return stateCopy;
    // case types.TOGGLE_COMPLETED:
    //   stateCopy.questions.map((task, curIdx) => {
    //     if (action.payload === curIdx) {
    //       return {
    //         ...state,
    //         questions: [...state.questions, { ...task, completed: true }],
    //       };
    //     }
    //     return state;
    //   });
    //   return state;
    case types.TOGGLE_COMPLETED:
      stateCopy.questions[action.payload] = {
        ...stateCopy.questions[action.payload],
        completed: !stateCopy.questions[action.payload].completed,
      };
      return stateCopy;
    case types.TOGGLE_DELETED:
      stateCopy.questions[action.payload] = {
        ...stateCopy.questions[action.payload],
        deleted: !stateCopy.questions[action.payload].deleted,
      };
      return stateCopy;
    case types.CLOSE_ALERT:
      return {
        ...state,
        alert: { ...state.alert, open: false },
      };
    default:
      return state;
  }
};

export default appReducer;

export const addTaskActionCreator = (text) => ({
  type: types.ADD_TASK,
  payload: text,
});
export const inputTextActionCreator = (text) => ({
  type: types.INPUT_TEXT,
  payload: text,
});
export const toggleCompletedActionCreator = (index) => ({
  type: types.TOGGLE_COMPLETED,
  payload: index,
});
export const toggleDeletedActionCreator = (index) => ({
  type: types.TOGGLE_DELETED,
  payload: index,
});
export const closeAlertActionCreator = () => ({ type: types.CLOSE_ALERT });
