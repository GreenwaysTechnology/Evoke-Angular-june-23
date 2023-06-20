import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { ProductsModule } from './products/products.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppheaderModule } from './appheader/appheader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GreeterModule,
    ProductsModule,
    NgbModule,
    AppheaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
