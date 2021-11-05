import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompraComponent } from './compra/compra.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';
import { ComentarioNewComponent } from './comentario-new/comentario-new.component';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { AboutComponent } from './about/about.component';
import { ZonasRepartoComponent } from './zonas-reparto/zonas-reparto.component';
import { ReservacionesNewComponent } from './reservaciones-new/reservaciones-new.component';

const routes: Routes = [
  {path: '', component: ComentariosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home/compra', component: CompraComponent},
  {path: 'home/reclamaciones', component: ReclamacionesComponent},
  {path: 'comentarios_new', component: ComentarioNewComponent },
  {path: 'menu/carta', component: MenuTableComponent },
  {path: 'home/about', component:AboutComponent},
  {path: 'home/zonas_reparto', component:ZonasRepartoComponent},
  {path: 'home/reservaciones', component:ReservacionesNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }