import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SolvedOperationHistoryComponent } from './components/solved-operation-history/solved-operation-history.component';

@NgModule({
  declarations: [CalculatorComponent, SolvedOperationHistoryComponent],
  exports: [CalculatorComponent, SolvedOperationHistoryComponent],
  imports: [CommonModule]
})
export class CalculatorModule { }
