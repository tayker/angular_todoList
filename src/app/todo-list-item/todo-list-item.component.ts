import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

    @Input() todo: Todo;
    
    @Output()
    remove: EventEmitter<Todo> = new EventEmitter();
    
    @Output()
    toggleComplete: EventEmitter<Todo> = new EventEmitter();
    
    constructor() { }

    full = false;
    
    toggleTodoComplete(todo: Todo){
        this.toggleComplete.emit(todo);
    }
    
    removeTodo(todo: Todo){
        this.remove.emit(todo);
    }
    
    showFullTodo(full){
        
        return this.full = !this.full
    }
    
    ngOnInit() {
    }

}
