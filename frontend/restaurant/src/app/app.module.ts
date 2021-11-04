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
import { CompraComponent } from './compra/compra.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComentariosComponent,
    ReservacionesNewComponent,
    ReservacionesDeleteComponent,
    ReservacionesEditComponent,
    CompraComponent,
    ReclamacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
