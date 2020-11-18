import { rerenderTree } from "./Render";
export const state = {
  Navigation: { navLinks: ["Board", "Tasks"] },
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
    newPostText: "react text",
  },
};

export const addTask = (text) => {
  let newObj = {
    text: text,
    completed: false,
    deleted: false,
    taskOpen: true,
  };
  state.App.questions.push(newObj);
  rerenderTree(state);
};
