import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styles: [
  ]
})
export class PerfilUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  regresar(){
    const tarjeta:any  = document.querySelector('#perfil-usuario');
    tarjeta.style.zIndex = 2;
    tarjeta.classList.remove('animate__animated',  'animate__rotateInDownLeft', 'animate__faster');

  }
}
