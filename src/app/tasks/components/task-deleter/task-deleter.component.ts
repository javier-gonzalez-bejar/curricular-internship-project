import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'tasks-task-deleter',
  templateUrl: 'task-deleter.component.html'
})
export class TaskDeleterComponent {

  @ViewChild('closeButton')
  public closeButton!: ElementRef<HTMLButtonElement>;

  @Output()
  public onTaskDeletion: EventEmitter<Task> = new EventEmitter();

  @Input()
  public task: Task = {
    completed: false,
    description: '',
    title: ''
  };

  emitTaskDeletion(): void {
    this.onTaskDeletion.emit(this.task);
    this.closeButton.nativeElement.click();
  }

}
