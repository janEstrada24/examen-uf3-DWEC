import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LlistaQuadresComponent } from './Projecte/Components/llista-quadres/llista-quadres.component';

const routes: Routes = []


@NgModule({
  declarations: [
    AppComponent,
    LlistaQuadresComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
