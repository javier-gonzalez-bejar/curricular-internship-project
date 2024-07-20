import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { NavigationBarModule } from './navigation-bar/navigation-bar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalculatorModule, NavigationBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
