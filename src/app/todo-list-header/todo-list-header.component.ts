import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent implements OnInit {

    newTodo = new Todo();
    
    @Output()
    add: EventEmitter<Todo> = new EventEmitter();
    
    
    constructor() { }
    
    addTodo(){
        this.add.emit(this.newTodo);
        this.newTodo = new Todo();
    }
    ngOnInit() {
    }

}
