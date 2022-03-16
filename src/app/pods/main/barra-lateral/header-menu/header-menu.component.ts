import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styles: [
  ]
})
export class HeaderMenuComponent   {


  abrirMiPerfil(){
    const tarjeta:any  = document.querySelector('#perfil-usuario');
    tarjeta?.classList.add('animate__animated',  'animate__rotateInDownLeft', 'animate__faster');
    tarjeta.style.zIndex = 5;
  }
  abrirEstados(){
    const tarjetaEstados: any  = document.querySelector('#estados');
    tarjetaEstados.style.zIndex = 7;
    tarjetaEstados.style.opacity = 1;
  }

  abrirMenu(){
    const terjetaMenu: any  = document.querySelector('#menu');
    terjetaMenu.classList.add('animate__animated',  'animate__zoomIn', 'animate__faster');
    terjetaMenu.style.zIndex = 5;
  }
}
