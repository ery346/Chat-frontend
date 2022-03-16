import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ContenidoModule } from './contenido/contenido.module';
import { BarraLateralModule } from './barra-lateral/barra-lateral.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BarraLateralComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContenidoModule,
    BarraLateralModule
  ],
  exports: [
    BarraLateralComponent,
    ContenidoComponent
  ]
})
export class MainModule { }
