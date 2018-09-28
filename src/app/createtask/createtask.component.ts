import {FormsModule, FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {TaskModel} from '../model/taskmodel';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {
  constructor(private service: TaskService, private router: Router) {
  }

  model = new TaskModel(null, '', '', '', 'New Task', new Date(), null, null, null);
  username = '';
  taskinfo = '';
  private task: Array<object> = [];
  private newTask: Array<object> = [];
  private unassignedTask: Array<object> = [];
  private users: Array<object> = [];

  ngOnInit() {
    this.getAllTask();
    this.getAllUsers();
    this.getNewTask();
    this.getUnAssignedTask();
  }

  getAllTask() {
    this.service.getAllTask().subscribe((data: Array<object>) => {
      this.task = data;
      console.log(data);
    });
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((data: Array<object>) => {
      this.users = data;
      console.log(data);
    });
  }

  getNewTask() {
    this.service.getNewTask().subscribe((data: Array<object>) => {
      this.newTask = data;
      console.log(data);
    });
  }

  getUnAssignedTask() {
    this.service.getUnassignedTask().subscribe((data: Array<object>) => {
      this.unassignedTask = data;
      console.log(data);
    });
  }


  submitTask() {
    return this.service.createTask(this.model).subscribe(response => {
      this.getAllTask();
      this.getUnAssignedTask();
      this.getNewTask();
    });
  }

  assignButtonClicked() {
    console.log('Username: ' + this.username + ' Taskinfo: ' + this.taskinfo);
    return this.service
      .assignTask(this.username, this.taskinfo)
      .subscribe(response => {
        this.getNewTask();
        this.getAllTask();
        this.getUnAssignedTask();
      });
  }
}
