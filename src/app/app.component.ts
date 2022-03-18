import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: ` 
    <fig-circulo [radio]={{radio}} ></fig-circulo> `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textoCirculo = 'Soy un circulo de radio ';
  radio = '834.9';
  resultado = '0';

  textoCuadrado = "Soy un cuadrado de "
  baseCuadrado = '34';
  alturaCuadrado = '34';

  textoTriangulo = "Soy un triángulo de "
  baseTriangulo = 12;
  alturaTriangulo = 56.7;

  escribirResultado(valor: string) {
    this.resultado = valor;
  }
}

