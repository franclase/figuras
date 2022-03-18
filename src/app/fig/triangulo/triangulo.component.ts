import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'figura-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {

  @Input() triangulo = "";
  constructor() { }

}
