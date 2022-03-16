import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { EstadosComponent } from './estados/estados.component';
import { ImagenAgrandadaComponent } from './imagen-agrandada/imagen-agrandada.component';
import { InfoInicioComponent } from './info-inicio/info-inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PerfilContactoComponent } from './perfil-contacto/perfil-contacto.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { MainModule } from './main/main.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    MainComponent,
    EstadosComponent,
    ImagenAgrandadaComponent,
    InfoInicioComponent,
    MenuComponent,
    PerfilContactoComponent,
    PerfilUsuarioComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    MenuModule
  ],
  exports: [
    MainComponent,
    EstadosComponent,
    ImagenAgrandadaComponent,
    InfoInicioComponent,
    MenuComponent,
    PerfilContactoComponent,
    PerfilUsuarioComponent
  ]
})
export class PodsModule { }
