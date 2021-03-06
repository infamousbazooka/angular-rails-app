import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable"
import { Todo } from './Todo'

@Injectable() 
export class DataService {

  private todosUrl: string = 'http://localhost:3000/todo'
  private headers = new Headers({ 'Accept': 'application/json' })
  private options = new RequestOptions({ headers: this.headers })

  constructor(private http : Http) { }

  getTodos() : Observable<any>{
     return this.http
      .get(`${this.todosUrl}`, this.options)
      .map((res: any) => { return res.json()})
  }

  addTodo(title: string) : Observable<Todo>{
    return this.http
      .post(`${this.todosUrl}`, {title: title}, this.options)
      .map((res: any) => {return res.json()})
      
  }

  deleteTodo(id: number) : Observable<Todo> {
    return this.http
    .delete(`${this.todosUrl}` + "/" + id, this.options)
    .map((res: any) => {return res.json()})
  }

  updateTodo(id: number) : Observable<Todo> {
    return this.http
    .patch(`${this.todosUrl}` + "/" + id, this.options)
    .map((res: any) => {return res.json()})
  }
}
