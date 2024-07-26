import { Component } from '@angular/core';
import { TasksService } from '../../../tasks/services/tasks.service';
import { Task } from '../../../tasks/interfaces/task.interfaces';

@Component({
  selector: 'shared-tasks-page',
  templateUrl: './tasks-page.component.html'
})
export class TasksPageComponent {

  constructor(private _tasksService: TasksService) { }

  get tasks(): Task[] {
    return this._tasksService.tasks;
  }

  onTaskAddition(task: Task): void {
    this._tasksService.addTask(task);
  }

}
