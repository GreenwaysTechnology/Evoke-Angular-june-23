import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';
import { RegistrationsuccessComponent } from './registrationsuccess.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationsuccessComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [
    RegistrationComponent,
    RegistrationsuccessComponent
  ]
})
export class RegistrationModule { }
