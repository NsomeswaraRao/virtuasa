import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

import { catchError } from 'rxjs/operators';

import { TodoList } from '../todo-list/todo';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  todoApiUrl = 'api/todoData'; 


  getTodo(): Observable<TodoList[]> {
    return this.http.get<TodoList[]>(this.todoApiUrl);
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}