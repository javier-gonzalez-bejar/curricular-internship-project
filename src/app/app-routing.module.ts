import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { CalculatorPageComponent } from './calculator/pages/calculator-page/calculator-page.component';
import { TasksPageComponent } from './tasks/pages/tasks-page/tasks-page.component';

const routes: Routes = [
  {
    component: HomePageComponent,
    path: ''
  },
  {
    component: CalculatorPageComponent,
    path: 'calculator'
  },
  {
    component: TasksPageComponent,
    path: 'tasks'
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
