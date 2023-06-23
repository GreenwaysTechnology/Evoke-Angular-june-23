import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { AppRoutingModule } from '../app-routing.module';
import { BooksComponent } from './books.component';
import { ElectronicsComponent } from './electronics.component';



@NgModule({
  declarations: [
    CategoryComponent,
    BooksComponent,
    ElectronicsComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports: [
    CategoryComponent,
    BooksComponent,
    ElectronicsComponent
  ]
})
export class CategoryModule { }
