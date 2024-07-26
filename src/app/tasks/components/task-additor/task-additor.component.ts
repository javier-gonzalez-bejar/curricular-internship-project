import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'tasks-task-additor',
  templateUrl: 'task-additor.component.html'
})
export class TaskAdditorComponent {

  private _closeButton!: ElementRef<HTMLButtonElement>;

  private _onTaskAddition: EventEmitter<Task> = new EventEmitter();

  private _task: Task = {
    completed: false,
    description: '',
    title: ''
  };

  @Output()
  get onTaskAddition() {
    return this._onTaskAddition;
  }

  get task(): Task {
    return this._task;
  }

  set task(task: Task) {
    this._task = task;
  }

  @ViewChild('closeButton')
  set closeButton(closeButton: ElementRef<HTMLButtonElement>) {
    this._closeButton = closeButton;
  }

  emitTaskAddition(): void {
    if (!(this._task.completed === true || this._task.completed === false) || !(this._task.description.length > 0) || !(this._task.title.length > 0)) return;
    this._onTaskAddition.emit(this._task);
    this._task = {
      completed: false,
      description: '',
      title: ''
    };
    this._closeButton.nativeElement.click();
  }

}
