//importerar interface för todo
import { ITodo } from "./ITodo";

//gör en klass för todo
export class Todo implements ITodo {
    task: string;
    completed: boolean;
    priority: number;

    constructor(task: string, completed: boolean, priority: number) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }
}