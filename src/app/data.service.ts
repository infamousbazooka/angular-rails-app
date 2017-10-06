import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

import { Todo } from './Todo'

@Injectable() 
export class DataService {

  private todosUrl: string = 'http://localhost:3000/todo';
  private headers = new Headers({ 'Accept': 'application/json' })
  private options = new RequestOptions({ headers: this.headers })

  private todo : Todo;

  constructor( private http : Http) { }

  getTodos() : Observable<any>{

     return this.http
      .get(`${this.todosUrl}`, this.options)
      .map((res: any) => { return res.json()});
  } 
}
