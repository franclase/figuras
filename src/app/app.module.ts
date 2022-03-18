import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CirculoComponent } from './fig/circulo/circulo.component';
import { CuadradoComponent } from './fig/cuadrado/cuadrado.component';
import { TrianguloComponent } from './fig/triangulo/triangulo.component';

@NgModule({
  declarations: [
    AppComponent,
    CirculoComponent,
    CuadradoComponent,
    TrianguloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
