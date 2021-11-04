import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservacionesNewComponent } from './reservaciones-new/reservaciones-new.component';
import { ReservacionesDeleteComponent } from './reservaciones-delete/reservaciones-delete.component';
import { ReservacionesEditComponent } from './reservaciones-edit/reservaciones-edit.component';
import { CompraComponent } from './compra/compra.component';
import { RegisterComponent } from './register/register.component';


import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';
import { MenuTableComponent } from './menu-table/menu-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComentariosComponent,
    ReservacionesNewComponent,
    ReservacionesDeleteComponent,
    ReservacionesEditComponent,
    CompraComponent,
    ReclamacionesComponent,
    RegisterComponent,
    MenuTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
