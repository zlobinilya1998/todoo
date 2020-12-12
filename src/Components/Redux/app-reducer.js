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
        return {
          ...state,
          questions: [...state.questions, newObj],
          inputText: "",
        };
      } else if (action.payload.length === 0) {
        return {
          ...state,
          alert: {
            ...state.alert,
            text: "Строка не может быть пустой",
            open: true,
          },
        };
      } else if (action.payload.length > 45) {
        return {
          ...state,
          alert: {
            ...state.alert,
            text: "Строка слишком длинная!",
            open: true,
          },
        };
      } else if (action.payload.length <= 5) {
        return {
          ...state,
          alert: {
            ...state.alert,
            text: "Строка слишком короткая!",
            open: true,
          },
        };
      }
    // eslint-disable-next-line
    case types.INPUT_TEXT:
      return {
        ...state,
        inputText: (state.inputText = action.payload),
      };
    case types.TOGGLE_COMPLETED:
      state.questions.map((task, curIdx) => {
        if (action.payload === curIdx) {
          return {
            ...state,
            questions: [...state.questions, { ...task, completed: true }],
          };
        }
        return state;
      });
      return state;
    case types.TOGGLE_DELETED:
      state.questions.map((task, curIdx) => {
        if (action.payload === curIdx) {
          return {
            ...state,
            questions: [
              ...state.questions,
              (state.questions[action.payload].deleted = true),
            ],
          };
        }
        return task;
      });
      return state;
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
