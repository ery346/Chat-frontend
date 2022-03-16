import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CambiarTemaComponent } from './cambiar-tema/cambiar-tema.component';
import { FondoPantallaComponent } from './fondo-pantalla/fondo-pantalla.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotificacionesComponent,
    CambiarTemaComponent,
    FondoPantallaComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NotificacionesComponent,
    CambiarTemaComponent,
    FondoPantallaComponent,
    CerrarSesionComponent
  ]
})
export class MenuModule { }
