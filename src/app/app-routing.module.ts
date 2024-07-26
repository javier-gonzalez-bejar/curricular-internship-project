import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { CalculatorPageComponent } from './shared/pages/calculator-page/calculator-page.component';
import { TasksPageComponent } from './shared/pages/tasks-page/tasks-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'calculator',
    component: CalculatorPageComponent
  },
  {
    path: 'tasks',
    component: TasksPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
