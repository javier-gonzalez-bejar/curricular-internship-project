import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'tasks-task-deleter',
  templateUrl: 'task-deleter.component.html'
})
export class TaskDeleterComponent {

  private _closeButton!: ElementRef<HTMLButtonElement>;

  private _onTaskDeletion: EventEmitter<Task> = new EventEmitter();

  private _task: Task = {
    completed: false,
    description: '',
    title: ''
  };

  @Output()
  get onTaskDeletion() {
    return this._onTaskDeletion;
  }

  get task(): Task {
    return this._task;
  }

  @ViewChild('closeButton')
  set closeButton(closeButton: ElementRef<HTMLButtonElement>) {
    this._closeButton = closeButton;
  }

  @Input()
  set task(task: Task) {
    this._task = {...task};
  }

  emitTaskDeletion(): void {
    this._onTaskDeletion.emit(this._task);
    this._closeButton.nativeElement.click();
  }

}
