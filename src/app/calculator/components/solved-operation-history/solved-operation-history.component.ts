import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculator-solved-operation-history',
  templateUrl: './solved-operation-history.component.html'
})
export class SolvedOperationHistoryComponent {

  private _solvedOperationHistory: string[] = [];

  get solvedOperationHistory(): string[] {
    return this._solvedOperationHistory;
  }

  @Input()
  set solvedOperationHistory(solvedOperationHistory: string[]) {
    this._solvedOperationHistory = solvedOperationHistory;
  }

}
