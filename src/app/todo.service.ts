import { Injectable } from '@angular/core';
import { Todo } from './Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: ({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }
  url: string = "https://jsonplaceholder.typicode.com/todos";
  urlLimit = "?_limit=5";

  //get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}/${this.urlLimit}`);
  }
  // on toggle
  onToggleServer(todo: Todo): Observable<any> {
    const url = `${this.url}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // delete todo
  deleteDo(todo: Todo): Observable<any> {
    const url = `${this.url}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }
  // add todo
addDo(todo: Todo): Observable<any> {
  const url = `${this.url}/${this.urlLimit}`;
return this.http.post(url, todo, httpOptions);
}


}

