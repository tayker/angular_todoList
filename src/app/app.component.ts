import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent {
    
    newTodo: Todo = new Todo();
    
    constructor(private todoDataService: TodoDataService){
        
    }
    
    onAddTodo(todo: Todo){
        this.todoDataService.addTodo(todo);
        localStorage.setItem('todo', JSON.stringify(this.todoDataService));
    }
    
    onToggleTodoComplete(todo){
        this.todoDataService.toggleTodoComplete(todo);
        localStorage.setItem('todo', JSON.stringify(this.todoDataService));
    }
    
    onRemoveTodo(todo){
        this.todoDataService.deleteTodoById(todo.id);
        localStorage.setItem('todo', JSON.stringify(this.todoDataService));
    }
    
    get todos(){
        return this.todoDataService.getAllTodos();
    }
    ngOnInit(){
        if(localStorage.getItem('todo') !== null){
            let storage = JSON.parse(localStorage.getItem('todo'));
            this.todoDataService.todos = storage.todos;
            this.todoDataService.lastId = storage.lastId;
        }
        
    }
}