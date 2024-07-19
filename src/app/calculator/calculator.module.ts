import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SolvedOperationHistoryComponent } from './components/solved-operation-history/solved-operation-history.component';

@NgModule({
  declarations: [
    CalculatorPageComponent,
    CalculatorComponent,
    SolvedOperationHistoryComponent
  ],
  exports: [
    CalculatorPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculatorModule { }
