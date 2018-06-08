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
        let i;
        for(i=0;i < this.todoDataService.todos.length;i++){
            if(this.todoDataService.todos[i].title == todo.title || !todo.title || !todo.task){
                return
            }
        }
        this.todoDataService.addTodo(todo);
        this.setToLocalStorage()
    }
    
    onToggleTodoComplete(todo){
        this.todoDataService.toggleTodoComplete(todo);
        this.setToLocalStorage()
    }
    
    onRemoveTodo(todo){
        this.todoDataService.deleteTodoById(todo.id);
        this.setToLocalStorage()
    }
    
    get todos(){
        return this.todoDataService.getAllTodos();
    }
    
    setToLocalStorage(){
        return localStorage.setItem('todo', JSON.stringify(this.todoDataService));
    }
    
    ngOnInit(){
        if(localStorage.getItem('todo') !== null){
            let storage = JSON.parse(localStorage.getItem('todo'));
            this.todoDataService.todos = storage.todos;
            this.todoDataService.lastId = storage.lastId;
        }
        
    }
}