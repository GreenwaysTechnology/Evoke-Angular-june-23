import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { UserModule } from './user/user.module';
// import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent
  ],
  imports: [
    BrowserModule, 
    HeaderModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }