import { Component } from '@angular/core';

@Component({
  selector: 'calculator-calculator-page',
  templateUrl: './calculator-page.component.html'
})
export class CalculatorPageComponent {

  private _solvedOperationHistory: string[] = [];

  constructor() {
    this.loadLocalStorage();
  }

  get solvedOperationHistory(): string[] {
    return this._solvedOperationHistory;
  }

  onSolvedOperation(solvedOperation: string): void {
    this._solvedOperationHistory.unshift(solvedOperation);
    this.saveLocalStorage();
  }

  private loadLocalStorage(): void {
    const solvedOperationHistoryLocalStorage: string | null = localStorage.getItem('solvedOperationHistory');
    if (solvedOperationHistoryLocalStorage === null) return;
    this._solvedOperationHistory = JSON.parse(solvedOperationHistoryLocalStorage);
  }

  private saveLocalStorage(): void {
    localStorage.setItem('solvedOperationHistory', JSON.stringify(this._solvedOperationHistory));
  }

}
