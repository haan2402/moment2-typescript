//importerar todo klassen
import { Todo } from "./todo";

export class TodoList {
    private todos: Todo[] = []; //gör en array av todos

    //skapar en constructor som skapar ett objekt av klassen TodoList
    constructor() {
        this.loadFromLocalStorage();
    }


//metod för att hämta todos med prioritet
public addTodo(task: string, priority: number): boolean {
    if(!task.trim() || ![1, 2, 3].includes(priority)) {
        return false;
    }

    this.todos.push(new Todo(task, false, priority));
    this.saveToLocalStorage();
    return true;
}


//metod för att markera färdiga todos
public markTodoCompleted(todoIndex: number): void {
    if(this.todos[todoIndex]) {
        this.todos[todoIndex].completed = true;
        this.saveToLocalStorage();
    }
}


//metod för att hämta lista med alla todos
public getTodos(): Todo[] {
    return this.todos;
}


//sparar todos till localstorage
public saveToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
}


//hämtar todos från localstorage
public loadFromLocalStorage(): void {
    const todoStr = localStorage.getItem('todos');
    if(todoStr) {
        const todoData = JSON.parse(todoStr);
        this.todos = todoData.map((c: {task: string; completed: boolean; priority: number }) => 
            new Todo(c.task, c.completed, c.priority));
    } 
}
}