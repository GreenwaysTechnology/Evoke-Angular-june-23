import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerdetailsComponent } from './customerdetails.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerdetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports: [
    CustomerdetailsComponent
  ]
})
export class CustomersModule { }
