import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CompraComponent } from './compra/compra.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComentarioNewComponent } from './comentario-new/comentario-new.component';

const routes: Routes = [
  {path: '', component: ComentariosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'home/compra', component: CompraComponent},
  {path:'home/reclamaciones', component: ReclamacionesComponent },
  {path: 'comentarios_new', component: ComentarioNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
