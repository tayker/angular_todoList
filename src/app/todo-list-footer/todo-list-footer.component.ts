import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss']
})
export class TodoListFooterComponent implements OnInit {

    @Input()
    todos: Todo[];
    
    constructor() { }

    sortByImportant(){
        
        let i;
        
        for(i=0;i<this.todos.length;i++){
            this.todos[i].sorted = false;
            if(this.todos[i].important === true){
                this.todos[i].sorted = true
            }
        }
    }
    
    sortByAll(){
        let i;
        
        for(i=0;i<this.todos.length;i++){
            this.todos[i].sorted = true
        }
    }
    
    sortByInProgress(){
        let i;
        
        for(i=0;i<this.todos.length;i++){
            this.todos[i].sorted = true;
            if(this.todos[i].complete === true){
                this.todos[i].sorted = false
            }
            
        }
    }
    
    sortByDone(){
        
        let i;
        
        for(i=0;i<this.todos.length;i++){
            this.todos[i].sorted = true;
            if(this.todos[i].complete === false){
                this.todos[i].sorted = false
            }
        }
    }
    
    ngOnInit() {
    }

}
