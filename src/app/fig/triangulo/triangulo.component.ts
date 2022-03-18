import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'figura-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {

  @Input() triangulo = "Soy un triángulo de 12 de base y 56.7 de altura";
  constructor() { }

}
