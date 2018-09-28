import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private task: Array<object> = [];

  constructor(private service: TaskService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllTask();

  }



  getAllTask() {
    this.service.getAllTask().subscribe((data: Array<object>) => {
      this.task = data;
      console.log(data);
    });
  }

  editTask(id) {
    this.router.navigate(['/landing/edittask/' + id]);

    //console.log(id);
  }

  deleteTask(id) {
    if (confirm('Are you sure to delete?')) {
      this.service.deleteTask(id).subscribe(value => {
        this.getAllTask();
      });

    }


  }
}
