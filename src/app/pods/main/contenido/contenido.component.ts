import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styles: [
  ]
})
export class ContenidoComponent implements OnInit {
  vaciar!: string; 
  msg: any = '';

  @ViewChild('msgs') texto!: ElementRef<HTMLInputElement>
  // @Output() mensage = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    const valor = this.texto.nativeElement.value;

    // this.obj.hora = hora;
    // this.obj.minutos = minutos;
    // this.obj.msg = valor;
    this.msg = valor
    // this.mensage.emit(this.msg)
    this.vaciar = ''
  }

}
