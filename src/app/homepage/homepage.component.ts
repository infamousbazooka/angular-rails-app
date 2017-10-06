import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
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

  ngOnInit() {
    this.dataService
    .getTodos()
    .subscribe(t => {
      this.todos = t
      console.log(this.todos);
      
    });
  }

}
