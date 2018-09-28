import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TaskModel} from './model/taskmodel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public static pageReload = false;
  constructor(private http: HttpClient) {
  }

  baseUrl: string = '/api/galaxy';

  getAllTask() {
    return this.http.get(this.baseUrl + '/task/list');
  }

  getTaskById(id) {
    return this.http.get(this.baseUrl + '/task/' + id);
  }

  getNewTask() {
    return this.http.get(this.baseUrl + '/task/newtask');
  }

  getUnassignedTask() {
    return this.http.get(this.baseUrl + '/task/unassigned');
  }

  getOngoingTask() {
    return this.http.get(this.baseUrl + '/task/ongoing');
  }

  getCompletedTask() {
    return this.http.get(this.baseUrl + '/task/completed');
  }

  getIncompleTask() {
    return this.http.get(this.baseUrl + '/task/incomplete');
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + '/user/list');
  }

  createTask(TaskModel: TaskModel) {
    return this.http.post(this.baseUrl + '/task', TaskModel);
  }

  deleteTask(id) {
    return this.http.delete(this.baseUrl + '/task/' + id);
  }

  createTaskReport(objective, description, taskstatus) {
    return this.http.post(
      this.baseUrl +
      '/taskreport/?objective=' +
      objective +
      '&taskstatus=' +
      taskstatus +
      '&description=' +
      description,
      {}
    );
  }

  assignTask(username, taskinfo) {
    return this.http.post(
      this.baseUrl + '/task/assign/?username=' + username + '&task=' + taskinfo,
      {}
    );
  }

  getDashboardNewTask() {
    return this.http.get(this.baseUrl + '/dashboard/newtask');
  }

  getDashboardOngoingTask() {
    return this.http.get(this.baseUrl + '/dashboard/ongoingtask');
  }

  getDashboardCompletedTask() {
    return this.http.get(this.baseUrl + '/dashboard/completedtask');
  }

  getDashboardIncompletedTask() {
    return this.http.get(this.baseUrl + '/dashboard/incompleted');
  }



  getDashboardUsers() {
  }

  /*   deleteTask(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  getTaskById(id: number): Observable<ITask[]> {
    return this.http.get<ITask>(this.baseUrl + "/" + id);
  }
  updateTask(ITask: ITask) {
    return this.http.put(this.baseUrl + "/" + ITask.taskid, ITask);
  } */
}
