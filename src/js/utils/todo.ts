import { createElement, getElementById, getInputElementById } from "./dom";

/**
 * todoの型定義
 */
export type TODO = {
  id: number;
  name: string;
  person: string;
  deadline: string;
};

/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */
export const getNewTodo = (): TODO => ({
  id: Date.now(),
  name: getInputElementById("new-todo-name").value,
  person: getInputElementById("new-person").value,
  deadline: getInputElementById("new-deadline").value,
});

/**
 * DOMにTODO一覧を表示する
 */
export const appendTodoList = (
  _todoList: TODO[],
  _filterWord: string,
  deleteTodo: (id: number) => void,
) => {
  _todoList
    .filter(
      (todo) =>
        todo.name.includes(_filterWord) ||
        todo.person.includes(_filterWord),
    )
    .forEach((todo) => {
      const nameTd = createElement("td", todo.name);
      const namePerson = createElement("td", todo.person);
      const nameDeadline = createElement("td", todo.deadline);

      // 削除ボタン
      const deleteButton = createElement("button", "削除");
      deleteButton.addEventListener("click", () => deleteTodo(todo.id));
      const deleteButtonTd = createElement("td");
      deleteButtonTd.appendChild(deleteButton);

      const tr = createElement("tr");
      tr.appendChild(nameTd);
      tr.appendChild(namePerson);
      tr.appendChild(nameDeadline);
      tr.appendChild(deleteButtonTd);
      const tBody = getElementById("tbody");
      tBody.appendChild(tr);
    });
};

/**
 * DOMのTODO一覧を全て削除する
 */
export const removeTodoList = () => {
  const tbody = getElementById("tbody");
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
};
