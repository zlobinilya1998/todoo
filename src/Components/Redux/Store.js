const TOGGLE_COMPLETED = "TOGGLE-COMPLETED";
const TOGGLE_DELETED = "TOGGLE-DELETED";
const ADD_TASK = "ADD-TASK";
const INPUT_TEXT = "INPUT-TEXT";
const CLOSE_ALERT = "CLOSE-ALERT";

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
    if (action.type === ADD_TASK) {
      const closeAlert = () => {
        this._state.App.alert.open = false;
        this._callSubscriber(this._state);
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
        this._state.App.questions.push(newObj);
        this._state.App.inputText = "";
        this._callSubscriber(this._state);
      } else if (action.text.length === 0) {
        this._state.App.alert.text[0] = "Строка не может быть пустой";
        this._state.App.alert.open = true;
        this._callSubscriber(this._state);
        setTimeout(closeAlert, 2000);
      } else if (action.text.length > 45) {
        this._state.App.alert.text[0] = "Строка слишком длинная!";
        this._callSubscriber(this._state);
        this._state.App.alert.open = true;
        setTimeout(closeAlert, 2000);
      } else if (action.text.length < 5) {
        this._state.App.alert.text[0] = "Строка слишком короткая!";
        this._callSubscriber(this._state);
        this._state.App.alert.open = true;
        setTimeout(closeAlert, 2000);
      }
    } else if (action.type === INPUT_TEXT) {
      this._state.App.inputText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === TOGGLE_COMPLETED) {
      this._state.App.questions.map((task, curIdx) => {
        if (action.index === curIdx) {
          this._state.App.questions[action.index].completed = !this._state.App
            .questions[action.index].completed;
          this._callSubscriber(this._state);
        }
        return task;
      });
    } else if (action.type === TOGGLE_DELETED) {
      this._state.App.questions.map((task, curIdx) => {
        if (action.index === curIdx) {
          this._state.App.questions[action.index].deleted = !this._state.App
            .questions[action.index].deleted;
        }
        return task;
      });
    } else if (action.type === CLOSE_ALERT) {
      this._state.App.alert.open = false;
      this._callSubscriber(this._state);
    } else return this._state;
  },
};

window.store = store;
