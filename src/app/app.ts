import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from "./task/task";
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TaskService } from './task-service';




@Component({
  selector: 'app-root',
    standalone: true,
  imports: [RouterOutlet, Task, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  today = new Date();
  price = 1234.56;
percentage = 0.259;

tasks: any[] = [];//liste vide
constructor(private taskService: TaskService) {}
ngOnInit() {//utiliser pour initialise la liste
this.tasks = this.taskService.getTasks();
}

  protected readonly title = signal('todolist');
addTask() {
  this.tasks.push ({id:'4',title: 'new task', done: false}) ;// utilise push pour appele le table id 
  
}
deletetask(ind:number){
  this.tasks.splice(ind,1);
}}

