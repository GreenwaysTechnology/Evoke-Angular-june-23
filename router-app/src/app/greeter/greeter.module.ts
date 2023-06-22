import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome.component';



@NgModule({
  declarations: [
    HelloComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent,
    WelcomeComponent
  ]
})
export class GreeterModule { }
