import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { BlockCentralComponent } from './component/block-central/block-central.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { PilotosComponent } from './paginas/pilotos/pilotos.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { PistasComponent } from './paginas/pistas/pistas.component';
import { EquiposComponent } from './paginas/equipos/equipos.component';
import { MonoplazaComponent } from './paginas/monoplaza/monoplaza.component';
import { CampeonComponent } from './paginas/campeon/campeon.component';
import { CardpilotosComponent} from './component/cards/card.pilotos/card.pilotos.component';
import { CardmonoplazaComponent } from './component/cards/cardmonoplaza/cardmonoplaza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BlockCentralComponent,
    InicioComponent,
    PilotosComponent,
    PageNotFoundComponent,
    PistasComponent,
    EquiposComponent,
    MonoplazaComponent,
    CampeonComponent,
    CardpilotosComponent,
    CardmonoplazaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
