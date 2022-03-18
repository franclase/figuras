import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fig-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.scss']
})
export class CuadradoComponent{
  @Input() cuadrado = "";
  constructor() { }
}
