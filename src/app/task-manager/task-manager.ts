import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Add this
import { task } from '../interfaces/task';
import { TaskService} from '../services/task.service';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-task-manager',
  imports: [DatePipe, UpperCasePipe, NgbModalModule,CommonModule],
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})

export class TaskManager {

  Taks: task[] = [];
  // priority = priority;

  constructor(private val: TaskService, private modalService: NgbModal) {
    this.Taks = this.val.getTasks();

  }

  openModal(content: any) {
  this.modalService.open(content, {
    centered: true
  });

}
 togglestat(i:number){
  this.val.toggleStatus(i);
 }

 addNewTask( id: string, name: string, desc: string, date: string, tag?:string) {
  this.val.addTask(id,name, desc,date,tag);
 }


// 1. Ensure your array is defined here
  // Taks: task[] = [];

  // // 2. Define the function exactly as named in the HTML
  // addTask(id: string, name: string, desc: string,deadline:string) {
  //    const parts = deadline.split('-');

  // // const taskDate = new Date(
  // //   Number(parts[0]),   // year
  // //   Number(parts[1]) - 1, // month (0 based)
  // //   Number(parts[2])    // day
  // // );
  //   const newTask:task = {
  //     id: id,
  //     name: name,
  //     description: desc,
  //     deadline:deadline,
  //     iscompleted: false, // Default value
  //     tag: 1 // Default priority
  //   };

  //   // Add it to your list
  //   this.Taks.push(newTask);
  // }




}






