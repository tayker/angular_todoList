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
            if(this.todoDataService.todos[i].title == todo.title || !todo.title){
                return
            }
        }
        this.todoDataService.addTodo(todo);
        localStorage.setItem('todo', JSON.stringify(this.todoDataService));
    }
    
    onToggleTodoComplete(todo){
        this.todoDataService.toggleTodoComplete(todo);
        console.log(this.todoDataService);
        localStorage.setItem('todo', JSON.stringify(this.todoDataService));
    }
    
    onRemoveTodo(todo){
        this.todoDataService.deleteTodoById(todo.id);
        localStorage.setItem('todo', JSON.stringify(this.todoDataService));
    }
    
    onToggleTodoImportant(todo){
        this.todoDataService.toggleTodoImportant(todo);
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