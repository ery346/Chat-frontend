import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-contacto',
  templateUrl: './perfil-contacto.component.html',
  styles: [
  ]
})
export class PerfilContactoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cerrarInfoContacto(){
    const terjetaContacto: any = document.querySelector('#info-contacto');
    terjetaContacto.style.zIndex = 0;
    terjetaContacto.classList.remove('animate__animated',  'animate__fadeInDown', 'animate__faster');
  }
}
