import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  coments = [
    {
      id_user: "1",
      puntuacion: "5",
      comentario: "muy buen local"
    },
    {
      id_user: "2",
      puntuacion: "3",
      comentario: "muy caro :V"
    }
  ];
  
  constructor(
    private DataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //aca iria el get comentarios. para que carge en la pagina principal
  }

  DeleteComment(values: any){
    this.DataService.deleteComentario(values).subscribe(
      response =>{
        console.log(response);
        //Despues de eliminar un comentario me redirigira a la venta con los comentarios
        this.router.navigate(['/comentarios'])
      },
      error => {
        console.log(error);
      }
    )
  }

}
