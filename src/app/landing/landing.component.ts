import {TaskService} from './../task.service';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, OnDestroy {

  title = 'BwGalaxy';
  ongoingtask: any = '';
  newtask: any = '';
  completedtask: any = '';
  incompletedtask: any = '';

  constructor(private service: TaskService) {
  }

  ngOnInit() {

    this.service.getDashboardOngoingTask().subscribe(response => {
      this.ongoingtask = response;
    });

    this.service.getDashboardNewTask().subscribe(response => {
      this.newtask = response;
    });

    this.service.getDashboardCompletedTask().subscribe(response => {
      this.completedtask = response;
    });

    this.service.getDashboardIncompletedTask().subscribe(response => {
      this.incompletedtask = response;
      console.log(this.incompletedtask);
    });

    this.reloadPage();

  }

  reloadPage() {
    if (TaskService.pageReload) {
      window.location.reload(false);
      TaskService.pageReload = false;
    }

  }

  ngOnDestroy(): void {
    TaskService.pageReload = false;
  }

}
