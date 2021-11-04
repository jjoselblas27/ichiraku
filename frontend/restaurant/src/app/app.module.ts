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
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComentariosComponent,
    ReservacionesNewComponent,
    ReservacionesDeleteComponent,
    ReservacionesEditComponent,
    RegisterComponent
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
