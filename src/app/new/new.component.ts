import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  todoForm: FormGroup
  @Output() todo: EventEmitter<Todo> = new EventEmitter()

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.todoForm = fb.group({
      'title' : [null, Validators.required]
    });
  }

  addTodo() {
    this.dataService.addTodo(this.todoForm.value.title).subscribe((data: Todo) => {
      this.todo.emit(data)
      this.todoForm.reset()
      return true
    }, error => {
      return Observable.throw(error)
    })
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
       title: new FormControl()
    });
  }

}
