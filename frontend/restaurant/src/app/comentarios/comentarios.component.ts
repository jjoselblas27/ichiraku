import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  comentarios_users: any[] = [];
  
  constructor(
    private DataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.DataService.getComentarios().subscribe( (data) => {
      this.comentarios_users = data;
    })
  }

  DeleteComment(values: any){
    this.DataService.deleteComentario(values).subscribe(
      response =>{
        console.log(response);
        //Despues de eliminar un comentario me redirigira a la venta con los comentarios
        this.router.navigate([''])
      },
      error => {
        console.log(error);
      }
    )
  }

}
