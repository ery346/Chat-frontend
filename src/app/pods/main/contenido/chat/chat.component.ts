import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
interface obj  {
  msg: string,
  hora: number,
  minutos: number
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnChanges {
  @Input() mensage!: any;
  obj = {
    msg: '',
    hora: 0,
    minutos: 0
  }
  cont:any = {
    msg: '',
    hora: 0,
    minutos: 0
  }
  mostrarMsg: any[] = [];
  constructor() { 
    // setInterval(() => {
    //   const h = new Date().getHours();
    //   const m = new Date().getMinutes();
    //   this.cont = {
    //     msg: 'traigo a la clika bien prendida en la toyota todos andamos pelones y siempre fumando mota',
    // hora: h,
    // minutos: m
    //   }
    // this.crearMsgContacto(this.cont, '.scroll-contenido')
    // }, 6000);
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.mensage.currentValue === ''){
    }else{
      const h = new Date().getHours();
      const m = new Date().getMinutes();
      this.obj = {
        msg: this.mensage,
        hora: h,
        minutos: m,
      }
      this.crearMiMsg(this.obj, '.scroll-contenido')
      // this.mostrarMsg = [... this.mostrarMsg, this.obj]
    }
  }

  crearMsgContacto(datos: any, scroll: any){
    const etiqueta = document.createElement('p');
    const info: any = document.querySelector('#chat');
    etiqueta.innerHTML = `
        <li class="you">
        <div class="entete">
          <span class="status green"></span>
          <h2>Alexandra</h2>
        </div>
        <div class="triangle"></div>
        <div class="message">
          <small>              
            ${datos.msg}
          </small>
 
        </div>
        <div><h3>${datos.hora}: ${datos.minutos}, Today</h3></div>
      </li>
        `;
    info.appendChild(etiqueta);

      // auto scroll down
      const element = document.querySelector(scroll);
      element.scrollTop = element.scrollHeight;
  }

  crearMiMsg(datos: any, scroll: any){
    const etiqueta = document.createElement('p');
    const info: any = document.querySelector('#chat');
    etiqueta.innerHTML = `
        <li class="me" scroll-glue>
       <div class="message">
      <small> ${datos.msg}, </small>
       </div>
       <div><h3>${datos.hora}:${datos.minutos}, Today</h3></div>
     </li>
        `;
    info.appendChild(etiqueta);

    // auto scroll down
    const element = document.querySelector(scroll);
      element.scrollTop = element.scrollHeight;
 
  }

  abrirImagen(){
    const tarjetaImagenAbierta: any  = document.querySelector('#ver-imagenes');
    tarjetaImagenAbierta.style.zIndex = 10;
    tarjetaImagenAbierta.style.opacity = 2;
  }

}
