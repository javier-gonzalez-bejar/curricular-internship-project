import { Component } from '@angular/core';

@Component({
  selector: 'calculator-calculator-page',
  templateUrl: './calculator-page.component.html'
})
export class CalculatorPageComponent {

  public solvedOperationHistory: string[] = [];

  onNewSolvedOperation(solvedOperation: string): void {
    this.solvedOperationHistory.push(solvedOperation);
  }

}
