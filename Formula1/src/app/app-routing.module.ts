import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeonComponent } from './paginas/campeon/campeon.component';
import { EquiposComponent } from './paginas/equipos/equipos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MonoplazaComponent } from './paginas/monoplaza/monoplaza.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { PilotosComponent } from './paginas/pilotos/pilotos.component';
import { PistasComponent } from './paginas/pistas/pistas.component';

const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'pilotos', component: PilotosComponent},
  {path:'equipos', component:EquiposComponent},
  {path:'pistas',component:PistasComponent},
  {path:'monoplaza',component:MonoplazaComponent},
  {path:'campeon',component:CampeonComponent},
  {path:'', component: InicioComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
