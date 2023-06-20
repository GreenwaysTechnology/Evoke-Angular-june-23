import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { HelloComponent } from './hello.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeComponent,
    HelloComponent
  ]
})
export class GreeterModule { }
