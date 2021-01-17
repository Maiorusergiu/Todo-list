import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo
@Output() deleteTodoEvent: EventEmitter<Todo> = new EventEmitter();

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  };

  onToggle(todo: Todo){
    //on UI
    this.todo.completed = !this.todo.completed
    //on server
    this.todoService.onToggleServer(todo).subscribe(todo => {
      console.log(todo);
    })
  }
  onDelete(todo) {
    this.deleteTodoEvent.emit(todo);
  }

}
