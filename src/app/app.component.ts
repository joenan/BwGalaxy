import { TaskService } from "./task.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "BwGalaxy";
  ongoingtask: any = "";
  newtask: any = "";
  completedtask: any = "";
  incompletedtask: any = "";

  constructor(private service: TaskService) {}

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
  }
}
