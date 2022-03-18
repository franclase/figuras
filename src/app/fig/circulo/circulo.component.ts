import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'fig-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss']
})

export class CirculoComponent {
  @Input() circulo = '' radio='0';
  
  //Si pongo <string | number> me da error $event
  @Output() multiplicar = new EventEmitter<string>();

  multiplicarRadio(radio: string){
      this.multiplicar.emit(radio);
  }

  constructor() { }
}