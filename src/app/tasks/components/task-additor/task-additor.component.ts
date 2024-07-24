import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task.interfaces';

@Component({
  selector: 'tasks-task-additor',
  templateUrl: 'task-additor.component.html'
})
export class TaskAdditorComponent {

  @ViewChild('closeButton')
  public closeButton!: ElementRef<HTMLButtonElement>;

  @Output()
  public onTaskAddition: EventEmitter<Task> = new EventEmitter();

  public task: Task = {
    completed: false,
    description: '',
    title: ''
  };

  emitTaskAddition(): void {
    if (!(this.task.completed === true || this.task.completed === false) || !(this.task.description.length > 0) || !(this.task.title.length > 0)) return;
    this.onTaskAddition.emit(this.task);
    this.task = {
      completed: false,
      description: '',
      title: ''
    };
    this.closeButton.nativeElement.click();
  }

}
