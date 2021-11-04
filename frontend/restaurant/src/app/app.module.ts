import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservacionesNewComponent } from './reservaciones-new/reservaciones-new.component';
import { ReservacionesDeleteComponent } from './reservaciones-delete/reservaciones-delete.component';
import { ReservacionesEditComponent } from './reservaciones-edit/reservaciones-edit.component';
<<<<<<< HEAD
import { CompraComponent } from './compra/compra.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';
=======
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> a7aa65ae9692278907ba2d29737e5a84aa97c299

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComentariosComponent,
    ReservacionesNewComponent,
    ReservacionesDeleteComponent,
    ReservacionesEditComponent,
<<<<<<< HEAD
    CompraComponent,
    ReclamacionesComponent
=======
    RegisterComponent
>>>>>>> a7aa65ae9692278907ba2d29737e5a84aa97c299
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
