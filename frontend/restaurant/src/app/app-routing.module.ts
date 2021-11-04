import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
<<<<<<< HEAD
import { CompraComponent } from './compra/compra.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';

const routes: Routes = [
  {path: '', component: ComentariosComponent},
  {path:'home/compra', component: CompraComponent},
  {path:'home/reclamaciones', component: ReclamacionesComponent }
  
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: ComentariosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
>>>>>>> a7aa65ae9692278907ba2d29737e5a84aa97c299
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
