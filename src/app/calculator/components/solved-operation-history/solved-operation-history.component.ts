import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculator-solved-operation-history',
  templateUrl: './solved-operation-history.component.html'
})
export class SolvedOperationHistoryComponent {

  @Input()
  public solvedOperationHistory: string[] = [];

}
