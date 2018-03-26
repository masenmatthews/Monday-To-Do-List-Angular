import { Component } from '@angular/core';
import { Task } from './models/task.model'
@Component({
  selector: 'poop-link',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Masen is Cool';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  firstTask: Task = new Task("Finish Big Boy Homework over the weekend");
}
