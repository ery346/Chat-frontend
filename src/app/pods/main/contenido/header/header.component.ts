import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  infoContacto(){
    const terjetaContacto: any  = document.querySelector('#info-contacto');
    terjetaContacto.classList.add('animate__animated',  'animate__fadeInDown', 'animate__faster');
    terjetaContacto.style.zIndex = 5;
  }
}
