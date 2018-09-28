import { TaskService } from "./../task.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reporttask",
  templateUrl: "./reporttask.component.html",
  styleUrls: ["./reporttask.component.css"]
})
export class ReporttaskComponent implements OnInit {
  status = ["Completed", "Incomplete"];
  taskstatus = "";
  objective = "";
  description = "";
  private allOngoingTask: any = [];

  constructor(private service: TaskService) {}

  ngOnInit() {
    this.getAllOngoingTask();
  }

  getAllOngoingTask() {
    return this.service.getOngoingTask().subscribe(response => {
      this.allOngoingTask = response;
    });
  }
  submitTaskReport() {
    return this.service
      .createTaskReport(this.objective, this.description, this.taskstatus)
      .subscribe(response => {
        console.log(response);
        this.getAllOngoingTask();
        this.description = '';
      });
  }
}
