import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { newTask } from '../models/newtask'


@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  @Output() addTask = new EventEmitter<object>();
  form: FormGroup;
  
  day = new Date().getDate();
  month = new Date().getMonth();
  year = new Date().getFullYear();
  
  minDate = new Date(this.year, this.month, this.day);
  description = new FormControl('', Validators['required'])
  priority = new FormControl('', Validators['required'])
  dueDate = new MatDatepickerModule()
  due = new FormControl('',Validators['required'])
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      description: this.description,
      priority: this.priority,
      due: this.due
    }
    )
  }

  ngOnInit(): void {
  }
onAdd(){
  
  let date = this.form.value.due.format('DD MM YYYY');
  let addNew = new newTask(
    this.form.value.description,
    this.form.value.priority,
    date
  )
  console.log(addNew)
  this.form.reset({
    due: {invalid: false, required: true}
  });
  this.addTask.next(addNew);
  
}
}
