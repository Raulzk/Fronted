import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { ListTrabajadorComponent } from './components/trabajador/list-trabajador/list-trabajador.component';
import { AddEditTrabajadorComponent } from './components/trabajador/add-edit-trabajador/add-edit-trabajador.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { AddEditClienteComponent } from './components/cliente/add-edit-cliente/add-edit-cliente.component';
import { ListaTrabajadoresComponent } from './components/lista-trabajadores/lista-trabajadores.component';
import { CotizarTrabajadorComponent } from './components/cotizar-trabajador/cotizar-trabajador.component';
import { ListCotizarComponent } from './components/cotizar-trabajador/list-cotizar/list-cotizar.component';
import { AddCotizarComponent } from './components/cotizar-trabajador/add-cotizar/add-cotizar.component';
import { MsjConfirmacionComponent } from './components/msj-confirmacion/msj-confirmacion.component';
import { SuccesfulRegistrationComponent } from './components/succesful-registration/succesful-registration.component';



const routes: Routes = [
  {
    path: '', redirectTo: 'landing-page', pathMatch: 'full'
  },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'msjConfirmacion', component: MsjConfirmacionComponent },
  {
    path: 'ListaTrabajadores', component: ListaTrabajadoresComponent
  },
  { path: 'succesful', component: SuccesfulRegistrationComponent },
  {
    path: 'cotizar', component: CotizarTrabajadorComponent, children: [
      { path: '', component: ListCotizarComponent },
      { path: 'add', component: AddCotizarComponent },
      { path: 'addC/:id', component: AddCotizarComponent },
    ]
  },
  {
    path: 'trabajadores', component: TrabajadorComponent, children: [
      { path: '', component: ListTrabajadorComponent },
      { path: 'add', component: AddEditTrabajadorComponent },
      { path: 'edit/:id', component: AddEditTrabajadorComponent },
    ]
  },
  {
    path: 'clientes', component: ClienteComponent, children: [
      { path: '', component: ListClienteComponent },
      { path: 'addC', component: AddEditClienteComponent },
      { path: 'editC/:id', component: AddEditClienteComponent }
    ]
  },
  { path: '**', redirectTo: 'landing-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
