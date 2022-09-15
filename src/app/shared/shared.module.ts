import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { SecondaryHeaderComponent } from './secondary-header/secondary-header.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import { CategoryComponent } from './header/category/category.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SecondaryHeaderComponent,
        CategoryComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SecondaryHeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class SharedModule { }
