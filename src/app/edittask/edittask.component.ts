import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../model/taskmodel';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  model = new TaskModel(null, '', '', '', 'New Task', new Date(), null,  null, null);
  retrievedModel:any;
  username = '';
  taskinfo = '';
  private task: Array<object> = [];
  private newTask: Array<object> = [];
  private unassignedTask: Array<object> = [];
  private users: Array<object> = [];
  id: any;

  constructor(private service: TaskService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(value => {
      this.id = value.id;
      this.getTaskById(this.id);
    });
  }

  getTaskById(id) {
    this.service.getTaskById(id).subscribe(value => {
       this.retrievedModel = value;
    });
  }

  submitTask() {
    return this.service.createTask(this.retrievedModel).subscribe(response => {
      console.log(response);
    });
  }


}

