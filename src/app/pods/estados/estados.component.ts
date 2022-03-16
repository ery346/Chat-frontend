import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styles: [
  ]
})
export class EstadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarEstados(){
    const tarjetaEstados: any  = document.querySelector('#estados');
    tarjetaEstados.style.zIndex = 0;
    tarjetaEstados.style.opacity = 0;
  }
}
