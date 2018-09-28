export class TaskModel {
  constructor(
    public taskid: Number,
    public objective: String,
    public description: String,
    public detaileddescription: String,
    public status: String,
    public datecreated: Date,
    public duedate: Date,
    public userid: any,
    public managerid: any
  ) {}
}
