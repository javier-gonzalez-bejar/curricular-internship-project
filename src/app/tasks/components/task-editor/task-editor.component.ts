import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'tasks-task-editor',
  templateUrl: 'task-editor.component.html'
})
export class TaskEditorComponent {

  @ViewChild('closeButton')
  public closeButton!: ElementRef<HTMLButtonElement>;

  @Output()
  public onTaskEdition: EventEmitter<Task> = new EventEmitter();

  @Input()
  public task: Task = {
    completed: false,
    description: '',
    title: ''
  };

  emitTaskEdition(): void {
    if (!(this.task.completed === true || this.task.completed === false) || !(this.task.description.length > 0) || !(this.task.title.length > 0)) return;
    this.onTaskEdition.emit(this.task);
    this.closeButton.nativeElement.click();
  }

}
