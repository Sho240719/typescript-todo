import "../css/index.css";
import { appendTodoList, getNewTodo, removeTodoList, TODO } from "./utils/todo";
import { getElementById } from "./utils/dom";

let todoList: TODO[] = [];

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = getElementById("register");
  registerButton.addEventListener("click", () => {
    // 新しいTODOをDOMから取得して、todoListに追加する
    todoList = [...todoList, getNewTodo()];
    // TODO一覧を表示する
    removeTodoList();
    appendTodoList(todoList);
  });
});
