import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SolvedOperationHistoryComponent } from './components/solved-operation-history/solved-operation-history.component';
import { CalculatorPageComponent } from './pages/calculator-page/calculator-page.component';

@NgModule({
  declarations: [CalculatorComponent, CalculatorPageComponent, SolvedOperationHistoryComponent],
  imports: [CommonModule]
})
export class CalculatorModule { }
