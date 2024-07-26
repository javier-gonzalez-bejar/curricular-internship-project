import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CalculatorModule } from '../calculator/calculator.module';
import { TasksModule } from '../tasks/tasks.module';

@NgModule({
  declarations: [CalculatorPageComponent, HomePageComponent, NavigationBarComponent, TasksPageComponent],
  exports: [CalculatorPageComponent, HomePageComponent, NavigationBarComponent, TasksPageComponent],
  imports: [CalculatorModule, CommonModule, RouterModule, TasksModule]
})
export class SharedModule { }
