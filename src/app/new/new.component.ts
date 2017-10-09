import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx'
import { DataService } from '../data.service'
import { Todo } from '../Todo'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {

  todoForm: FormGroup;
  todo: Todo;
  title: string = '';
  status: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.todoForm = fb.group({
      'title' : [null, Validators.required]
    });
  }

  addTodo() {
    this.submitted = true
    this.dataService.addTodo(this.todoForm.value.title)
      .subscribe((data: any) => {
        this.todo = data
        return true
      }, error => {
        console.log("Error returning observable!");
        return Observable.throw(error)
      })
    console.log(this.todoForm.value.title);
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
       title: new FormControl()
    });
  }

}
