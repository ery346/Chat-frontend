import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent   {

  cerrarMenu(){
    const terjetaMenu: any  = document.querySelector('#menu');
    terjetaMenu.style.zIndex = 0;
    terjetaMenu.classList.remove('animate__animated',  'animate__zoomIn', 'animate__faster');

  }
}
