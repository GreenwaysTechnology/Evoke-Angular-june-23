import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreeterModule } from './greeter/greeter.module';
import { UtilModule } from './util/util.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GreeterModule,
    UtilModule,
    HttpClientModule,
    CategoryModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
