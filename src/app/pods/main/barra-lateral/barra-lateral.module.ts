import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaComponent } from './busqueda/busqueda.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ContactosComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusquedaComponent,
    HeaderMenuComponent,
    ContactosComponent
  ]
})
export class BarraLateralModule { }
