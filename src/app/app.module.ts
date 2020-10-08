import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { CentroComponent } from './centro/centro.component';
import { ListaprofComponent } from './listaprof/listaprof.component';
import { ListacursosComponent } from './listacursos/listacursos.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    CentroComponent,
    ListaprofComponent,
    ListacursosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
