import { Component } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'tasks-tasks-page',
  templateUrl: './tasks-page.component.html'
})
export class TasksPageComponent {

  constructor(private tasksService: TasksService) { }

  get tasks(): Task[] {
    return this.tasksService.tasks;
  }

  onTaskAddition(task: Task): void {
    this.tasksService.addTask(task);
  }

}
