import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3-workshop';
  description:string;
  priority:string;
  date:string;
  gotTask:boolean;
  tasks = [];


  displayTask($event){
    this.tasks.push($event)
    this.gotTask = $event;
    //this.description = $event.description,
    //this.priority = $event.priority,
    //this.date = $event.due

    console.log("all tasks", this.tasks)
  }
}
