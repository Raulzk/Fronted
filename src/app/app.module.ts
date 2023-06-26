import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { ToolbarComponent } from './components/trabajador/toolbar/toolbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { AddEditTrabajadorComponent } from './components/trabajador/add-edit-trabajador/add-edit-trabajador.component';
import { ListTrabajadorComponent } from './components/trabajador/list-trabajador/list-trabajador.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TrabajadorDialogComponent } from './components/trabajador/list-trabajador/trabajador-dialog/trabajador-dialog.component';
import { SignupComponent } from './components/signup/signup.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AddEditClienteComponent } from './components/cliente/add-edit-cliente/add-edit-cliente.component';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { ClienteDialogComponent } from './components/cliente/list-cliente/cliente-dialog/cliente-dialog.component';
import { ListaTrabajadoresComponent } from './components/lista-trabajadores/lista-trabajadores.component';
import { CotizarTrabajadorComponent } from './components/cotizar-trabajador/cotizar-trabajador.component';
import { AddCotizarComponent } from './components/cotizar-trabajador/add-cotizar/add-cotizar.component';
import { ListCotizarComponent } from './components/cotizar-trabajador/list-cotizar/list-cotizar.component';
import { CotizarDialogoComponent } from './components/cotizar-trabajador/list-cotizar/cotizar-dialogo/cotizar-dialogo.component';
import { MsjConfirmacionComponent } from './components/msj-confirmacion/msj-confirmacion.component';
import { SuccesfulRegistrationComponent } from './components/succesful-registration/succesful-registration.component';
import { HomeComponent } from './components/home/home.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { Reporte01Component } from './components/reportes/reporte01/reporte01.component';


@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    ToolbarComponent,
    LandingPageComponent,
    LoginComponent,
    AddEditTrabajadorComponent,
    ListTrabajadorComponent,
    TrabajadorDialogComponent,
    SignupComponent,
    ClienteComponent,
    AddEditClienteComponent,
    ListClienteComponent,
    ClienteDialogComponent,
    ListaTrabajadoresComponent,
    CotizarTrabajadorComponent,
    AddCotizarComponent,
    ListCotizarComponent,
    CotizarDialogoComponent,
    MsjConfirmacionComponent,
    SuccesfulRegistrationComponent,
    HomeComponent,
    ReportesComponent,
    Reporte01Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
