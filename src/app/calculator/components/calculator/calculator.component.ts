import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'calculator-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {

  private _unsolvedOperation: string = '';

  @Output()
  public onNewSolvedOperation: EventEmitter<string> = new EventEmitter();

  get unsolvedOperation() {
    return this._unsolvedOperation;
  }

  concatenateInUnsolvedOperation(string: string): void {
    this._unsolvedOperation += string;
  }

  emitSolvedOperation(): void {
    const unsolvedOperationRegExp: RegExp = /^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/;
    if (!unsolvedOperationRegExp.test(this._unsolvedOperation)) {
      console.error(`The operation "${this._unsolvedOperation}" does not comply with the regular expression "${unsolvedOperationRegExp}"`);
      this._unsolvedOperation = '';
      return;
    }
    let result: number;
    try {
      result = new Function(`return ${this._unsolvedOperation}`)();
      if (result === Infinity || result === -Infinity || isNaN(result)) throw Error(`The result of the operation "${this._unsolvedOperation}" is "${result}"`);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      else console.error('Unexpected error:', error);
      this._unsolvedOperation = '';
      return;
    }
    const solvedOperation: string = `${this._unsolvedOperation}=${result}`;
    this.onNewSolvedOperation.emit(solvedOperation);
    this._unsolvedOperation = '';
  }

}
