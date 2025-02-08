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
    appendTodoList(todoList, deleteTodo);
  });
});

/**
 * TODOを削除する
 * @param id
 */
const deleteTodo = (id: number) => {
  todoList = todoList.filter((todo) => todo.id !== id);
  removeTodoList();
  appendTodoList(todoList, deleteTodo);
};
