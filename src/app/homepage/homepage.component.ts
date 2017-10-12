import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Observable } from 'rxjs/Rx'
import { Todo } from '../Todo'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private dataService: DataService) { }

  deleteTodo(id: number) {
    this.dataService
      .deleteTodo(id)
      .subscribe((data:any) => {
        this.todos.map((todo, key) => {
          if(data.id == todo.id){
            this.todos.splice(key, 1)
          }
        })
        return true
      }, error => {
        console.log("Error returning observable!")
        return Observable.throw(error)
      })
  }

  updateTodo(id: number) {
    this.dataService
      .updateTodo(id)
      .subscribe((data: any) => {
        this.todos = this.todos.map(todo => {
          if(data.id == todo.id){
            todo.status = data.status
          }
          return todo
        })
        return true
      }, error => {
        console.log("Error returning observable!")
        return Observable.throw(error)
      })
  }

  ngOnInit() {
    this.dataService.getTodos().subscribe(data => {
      this.todos = data
    })
  }

  receiveTodo(todo) {
    this.todos.push(todo)
  }

}
