import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {

  rForm: FormGroup;
  todo:any;
  title:string = '';
  status:boolean = false;

  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'title' : [null, Validators.required],
      'status' : [null, Validators.required]
    });
  }
  addPost(todo) {
    this.title = todo.title;
    this.status = todo.status;
  }

  ngOnInit() {
  }

}
