import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CalculatorModule } from './calculator/calculator.module';
import { HomeModule } from './home/home.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, CalculatorModule, HomeModule, SharedModule, TasksModule]
})
export class AppModule { }
