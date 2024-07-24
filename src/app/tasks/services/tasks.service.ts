import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Task } from '../interfaces/task.interfaces';

@Injectable({providedIn: 'root'})
export class TasksService {

  private _tasks: Task[] = [];

  constructor() {
    this.loadLocalStorage();
  }

  get tasks(): Task[] {
    return [...this._tasks];
  }

  addTask(task: Task): void {
    const newTask: Task = {...task, id: uuid()};
    this._tasks.unshift(newTask);
    this.saveLocalStorage();
  }

  editTask(task: Task): void {
    const taskIndex = this._tasks.findIndex(_task => _task.id === task.id);
    if (taskIndex === -1) return;
    this._tasks.splice(taskIndex, 1);
    this._tasks.unshift(task);
    this.saveLocalStorage();
  }

  deleteTask(task: Task): void {
    this._tasks = this._tasks.filter(_task => _task.id !== task.id);
    this.saveLocalStorage();
  }

  private loadLocalStorage(): void {
    const tasksLocalStorage: string | null = localStorage.getItem('tasks');
    if (tasksLocalStorage === null) return;
    this._tasks = JSON.parse(tasksLocalStorage);
  }

  private saveLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
  }

}
