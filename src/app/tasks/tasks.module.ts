import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskAdditorComponent } from './components/task-additor/task-additor.component';
import { TaskDeleterComponent } from './components/task-deleter/task-deleter.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

@NgModule({
  declarations: [TaskAdditorComponent, TaskDeleterComponent, TaskEditorComponent, TaskListComponent, TasksPageComponent],
  exports: [TasksPageComponent],
  imports: [CommonModule, FormsModule]
})
export class TasksModule { }
