import "../css/index.css";
import { appendTodoList, getNewTodo, removeTodoList, TODO } from "./utils/todo";
import { getElementById, getInputElementById } from "./utils/dom";

let todoList: TODO[] = [];
let filterWord: string = "";

document.addEventListener("DOMContentLoaded", () => {
  // 登録ボタン押下時の処理
  const registerButton = getElementById("register");
  registerButton.addEventListener("click", () => {
    // 新しいTODOをDOMから取得して、todoListに追加する
    todoList = [...todoList, getNewTodo()];
    // TODO一覧を表示する
    removeTodoList();
    appendTodoList(todoList, filterWord, deleteTodo);
  });

  // 絞り込み入力時の処理
  const filterInput = getInputElementById("filter");
  filterInput.addEventListener("input", () => {
    filterWord = filterInput.value

    // TODO一覧を表示する
    removeTodoList();
    appendTodoList(todoList, filterWord, deleteTodo);
  });
});

/**
 * TODOを削除する
 * @param id
 */
const deleteTodo = (id: number) => {
  todoList = todoList.filter((todo) => todo.id !== id);
  removeTodoList();
  appendTodoList(todoList, filterWord, deleteTodo);
};
