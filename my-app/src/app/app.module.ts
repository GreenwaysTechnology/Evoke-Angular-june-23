import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
// import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent
  ],
  imports: [
    BrowserModule,  //sub module to AppModule //browserModule has basic browser features
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }