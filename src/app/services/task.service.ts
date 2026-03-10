import { Injectable } from '@angular/core';
import {  task, priority } from '../interfaces/task';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class TaskService {

  tasks:task[]=[

      {
        id:'TSK1',
        name:'Build my portfolio',
        description:'Build a personal space with some projects to showcase my skills',
        deadline:'2026-03-09',
        tag:'high',
        iscompleted:false

      },
      {
        id:'TSK2',
        name:'Search for internship',
        description:'Seek for companies in my area for in person intership',
        deadline:'2026-03-09',
        tag:'medium',
        iscompleted:true

      },
      {
        id:'TSK3',
        name:'Learn SEO techniques',
        description:'What is  SEO? and how to integrate it in my work flow',
        deadline:'2026-03-09',
        tag:'low',
        iscompleted:true

      },
      {
        id:'TSK4',
        name:'Pre-Order the macbook Neo',
        description:'Buy a new  cheap Mac for my little brother',
        deadline:'2026-03-09',
        tag:'low',
        iscompleted:false

      },

      {
        id:'TSK5',
        name:'Improve mys JS skills',
        description:'Use youtube videos to learn more and build projects',
        deadline:'2026-03-09',
        tag:'medium',
        iscompleted:false

      }

  ]

  getTasks(){
    return this.tasks;
  }


 addTask(val1:string, val2:string, val3:string,val4:string, val5?:string){
const newVal= val5 as priority;
if(val1!=''|| val2!=''|| val3!=''){
    this.tasks.push({
    id:val1,
    name:val2,
    description:val3,
    deadline:val4,
    tag:newVal,
    iscompleted:false
  })
}
 }

 toggleStatus(i:number){

    this.tasks[i].iscompleted=!this.tasks[i].iscompleted;
 }

}
