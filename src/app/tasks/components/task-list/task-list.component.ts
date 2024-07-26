import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'tasks-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  private _tasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  get tasks() {
    return this._tasks;
  }

  @Input()
  set tasks(tasks: Task[]) {
    this._tasks = tasks;
  }

  onTaskDeletion(task: Task): void {
    this.tasksService.deleteTask(task);
  }

  onTaskEdition(task: Task): void {
    this.tasksService.editTask(task);
  }

}
