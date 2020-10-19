import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrearComponent } from './Componentes/crear/crear.component';
import { BorrarComponent } from './Componentes/borrar/borrar.component';
import { ActualizarComponent } from './Componentes/actualizar/actualizar.component';
import { MostrarComponent } from './Componentes/mostrar/mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    BorrarComponent,
    ActualizarComponent,
    MostrarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
