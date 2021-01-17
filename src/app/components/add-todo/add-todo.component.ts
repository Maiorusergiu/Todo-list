import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodoEvent: EventEmitter<any> = new EventEmitter();
  title: string;
  constructor(
    todoService: TodoService
  ) { }

  ngOnInit(): void {
    
    }

    onSubmit() {
      const todo = {
        title: this.title,
        'is-complete': false
  }
  this.addTodoEvent.emit(todo);
}
}
