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

  constructor(private dataService: DataService) {
    
  }

  deleteTodo(id: number) {
    this.dataService
      .deleteTodo(id)
      .subscribe((data:any) => {
        this.todos = data;
        return true
      }, error => {
        console.log("Error returning observable!");
        return Observable.throw(error)
      })
  }

  updateTodo(id: number) {
    this.dataService
      .updateTodo(id)
      .subscribe((data: any) => {
        this.todos = data
        return true
      }, error => {
        console.log("Error returning observable!");
        return Observable.throw(error)
      })
  }

  ngOnInit() {
    this.dataService
    .getTodos()
    .subscribe(t => {
      this.todos = t
      console.log(this.todos);
    });
  }

}
