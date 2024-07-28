import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'tasks-tasks-page',
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
