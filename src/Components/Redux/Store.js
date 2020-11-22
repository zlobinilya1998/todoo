import appReducer from "./app-reducer";
export const store = {
  _state: {
    App: {
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
      alert: {
        open: false,
        text: ["Ошибка"],
      },
      inputText: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.App = appReducer(this._state.App, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
