import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styles: [
  ]
})
export class ContactosComponent implements OnInit {
  misContactos: any = [
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'Hola mijo   ', fecha: 'hoy'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'ayer estube cansado ', fecha: 'viernes'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'Hola ', fecha: 'martes'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'como estass ', fecha: 'hoy'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'que bueno ', fecha: 'sabado'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'quiero saber mas ', fecha: 'ayer'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'ya no funciono ', fecha: 'ayer'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'Hola ', fecha: 'hoy'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'Hola ', fecha: 'hoy'},
    {nombre: 'Alexandra', img: './assets/perfil fotos/alex-daddario-ig-10.jpg', texto: 'Hola ', fecha: 'hoy'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
