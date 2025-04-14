//importerar todolist
import { TodoList } from "./TodoList";

//gör ett obejkt av todolist
const todoList = new TodoList();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todoForm') as HTMLFormElement;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo();
  });
  renderTodos();
});

//funktion för att lägga till ny todo
function addTodo(): void {
  const taskInput = document.getElementById('task') as HTMLInputElement;
  const priorityInput = document.getElementById('priority') as HTMLSelectElement;

  const task = taskInput.value;
  const priority = Number(priorityInput.value);

  const newTodo = todoList.addTodo(task, priority);

  if(newTodo) {
    taskInput.value = '';
    priorityInput.value = '1';
    renderTodos();
  }
}

//funktion för render todo
function renderTodos(): void {
  const todos = todoList.getTodos();
  const todosList = document.getElementById('todo-list') as HTMLUListElement;

  //rensar lista
  todosList.innerHTML = '';

  //skriver ut i listan en ny todo
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    ${todo.completed ? "✔" : ""}
    <strong>${todo.task}</strong>
    (Prioritet: ${todo.priority})`;

    //gör en knapp för avklarad todo
    if(!todo.completed) {
      const compBtn = document.createElement('span');
      compBtn.textContent = 'Avklarad';
      compBtn.className = 'compBtn';

      compBtn.addEventListener('click', () => {
        todoList.markTodoCompleted(index);
        renderTodos();
      });
      li.appendChild(compBtn);
    }

    //knapp för att ta bort todo från listan
    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'Ta bort';
    deleteButton.className = 'deleteButton';

    deleteButton.addEventListener('click', () => {
      todoList.deleteTodo(todo.task);
      renderTodos();
    });
    li.appendChild(deleteButton);

    todosList.appendChild(li);
  });
}