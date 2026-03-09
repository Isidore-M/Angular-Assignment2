import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManager } from "./task-manager/task-manager";
import { DatePipe } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [TaskManager,NgbModalModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taskmanager');
}
