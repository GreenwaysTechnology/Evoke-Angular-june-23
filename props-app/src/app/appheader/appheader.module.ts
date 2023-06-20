import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppheaderComponent } from './appheader.component';
import { LogoComponent } from './logo.component';



@NgModule({
  declarations: [
    AppheaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppheaderComponent,
    LogoComponent
  ]
})
export class AppheaderModule { }
