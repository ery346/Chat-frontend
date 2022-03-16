import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fondo-pantalla',
  templateUrl: './fondo-pantalla.component.html',
  styles: [
  ]
})
export class FondoPantallaComponent implements OnInit {
  contenidoMsg: any = document.querySelector('#fondop');
  FondoDefaul: string = "url('https://wallpaperaccess.com/full/1567846.jpg')";
  constructor() { }

  ngOnInit(): void {
    this.contenidoMsg.style.backgroundImage = this.FondoDefaul;
  }

  fondoDefault(){
    this.contenidoMsg.style.backgroundImage = this.FondoDefaul;
  }
  fondo1(){
    this.contenidoMsg.style.backgroundImage = "url('https://fondosmil.com/fondo/1863.jpg')"
  }
  fondo2(){
    this.contenidoMsg.style.backgroundImage = "url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80')";

  }
  fondo3(){
    this.contenidoMsg.style.backgroundImage = "url('https://wallpaperaccess.com/full/896872.jpg')";

  }
  fondo4(){
    this.contenidoMsg.style.backgroundImage = "url('https://wallpaperbat.com/img/510376-beautiful-pink-sky-wallpaper-download-hd-image-for-free.jpg')";

  }
}
