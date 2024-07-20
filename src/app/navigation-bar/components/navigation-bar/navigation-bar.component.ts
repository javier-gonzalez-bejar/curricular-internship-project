import { Component } from '@angular/core';

@Component({
  selector: 'navigation-bar-navigation-bar',
  templateUrl: './navigation-bar.component.html'
})
export class NavigationBarComponent {

  private _navigationBarItems: string[] = ['Home', 'Calculator', 'Tasks'];

  get navigationBarItems(): string[] {
    return [...this._navigationBarItems];
  }

}
