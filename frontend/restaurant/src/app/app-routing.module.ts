import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { CompraComponent } from './compra/compra.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';

const routes: Routes = [
  {path: '', component: ComentariosComponent},
  {path:'home/compra', component: CompraComponent},
  {path:'home/reclamaciones', component: ReclamacionesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
