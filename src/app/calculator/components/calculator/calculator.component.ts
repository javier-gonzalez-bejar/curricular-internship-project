import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'calculator-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {

  @Output()
  public onNewSolvedOperation: EventEmitter<string> = new EventEmitter();

  public unsolvedOperation: string = '';

  concatenateInUnsolvedOperation(string: string): void {
    this.unsolvedOperation += string;
  }

  emitSolvedOperation(): void {
    const unsolvedOperationRegExp: RegExp = /^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$/;
    if (!unsolvedOperationRegExp.test(this.unsolvedOperation)) {
      console.error(`The operation "${this.unsolvedOperation}" does not comply with the regular expression "^\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*$"`);
      this.unsolvedOperation = '';
      return;
    }
    let result: number;
    try {
      result = new Function(`return ${this.unsolvedOperation}`)();
      if (result === Infinity || result === -Infinity) throw Error(`The result of the operation "${this.unsolvedOperation}" is Infinity`);
      if (isNaN(result)) throw Error(`The result of the operation "${this.unsolvedOperation}" is NaN`);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
      else console.error('Unexpected error:', error);
      this.unsolvedOperation = '';
      return;
    }
    const solvedOperation: string = `${this.unsolvedOperation}=${result}`;
    this.onNewSolvedOperation.emit(solvedOperation);
    this.unsolvedOperation = '';
  }

}
