import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos: Todo[];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  delete(todo: Todo) {
    // delete on the UI
    this.todos = this.todos.filter(t => t.id !== todo.id)
    // delete on the server
    this.todoService.deleteDo(todo).subscribe();
    if(this.todoService.deleteDo(todo)){
      console.log("delete succesful on server");
    }
  }
//add todo
  add(todo: Todo) {
    this.todoService.addDo(todo).subscribe(todo => {
      this.todos.push(todo);
    })
  }

}
