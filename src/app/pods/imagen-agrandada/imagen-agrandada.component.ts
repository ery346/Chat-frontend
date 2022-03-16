import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagen-agrandada',
  templateUrl: './imagen-agrandada.component.html',
  styles: [
  ]
})
export class ImagenAgrandadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarImagen(){
    const tarjetaImagenAbierta:any  = document.querySelector('#ver-imagenes');
    tarjetaImagenAbierta.style.zIndex = 0;
    tarjetaImagenAbierta.style.opacity = 0;
  }
}
