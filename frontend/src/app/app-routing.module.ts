import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoInmuebleComponent } from './components/nuevo-inmueble/nuevo-inmueble.component';
import { AsesorComponent} from './components/asesor/asesor.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
