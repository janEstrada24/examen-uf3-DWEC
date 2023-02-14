import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LlistaQuadresComponent } from './Projecte/Components/llista-quadres/llista-quadres.component';

@NgModule({
  declarations: [
    AppComponent,
    LlistaQuadresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
