import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NuevoInmuebleComponent } from './components/nuevo-inmueble/nuevo-inmueble.component';

const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"inicio", component: BusquedaComponent},
  {path:"inicio", component: InicioComponent},
  {path:"inicio", component: NavbarComponent},
  {path:"inicio", component: NuevoInmuebleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
