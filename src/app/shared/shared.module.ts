import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [NavigationBarComponent],
  exports: [NavigationBarComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule { }
