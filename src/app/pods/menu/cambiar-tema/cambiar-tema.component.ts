import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-tema',
  templateUrl: './cambiar-tema.component.html',
  styles: [
  ]
})
export class CambiarTemaComponent implements OnInit {
  
  temaDefaul: string = './assets/css/temas/claro.css';
  cambio: any  = document.querySelector('#cambio');
  constructor() { }

  ngOnInit(): void {

    const claro:any  = document.querySelector('#claro');
    claro.checked = true;
    this.cambio.setAttribute('href', this.temaDefaul);
  }

  temaClaro(){
    this.cambio.setAttribute('href', './assets/css/temas/claro.css');
  }
  temaOscuro(){
    this.cambio.setAttribute('href', './assets/css/temas/oscuro.css');
  }
}
