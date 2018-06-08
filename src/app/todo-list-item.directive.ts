import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImportant]'
})

export class AppImportantDirective {
    
    @Input() todo;
    
    @HostBinding('class.active') isActive = false;
    
    @HostListener('click') onCLick(){
        console.log(this)
        this.todo.important = !this.todo.important;
        this.isActive = this.todo.important;
    }
    ngOnInit(){
        this.isActive = this.todo.important;
    }
  constructor() { }

}