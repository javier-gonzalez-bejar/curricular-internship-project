import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'tasks-task-editor',
  templateUrl: 'task-editor.component.html'
})
export class TaskEditorComponent {

  private _closeButton!: ElementRef<HTMLButtonElement>;

  private _onTaskEdition: EventEmitter<Task> = new EventEmitter();

  private _task: Task = {
    completed: false,
    description: '',
    title: ''
  };

  @Output()
  get onTaskEdition() {
    return this._onTaskEdition;
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

  emitTaskEdition(): void {
    if (!(this._task.completed === true || this._task.completed === false) || !(this._task.description.length > 0) || !(this._task.title.length > 0)) return;
    this._onTaskEdition.emit(this._task);
    this._closeButton.nativeElement.click();
  }

}
