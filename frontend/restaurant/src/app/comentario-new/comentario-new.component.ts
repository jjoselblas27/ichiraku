import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comentario-new',
  templateUrl: './comentario-new.component.html',
  styleUrls: ['./comentario-new.component.scss']
})
export class ComentarioNewComponent implements OnInit {
  nuevo_comentario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private DataService: DataService,
    private router: Router
  ) {
    this.nuevo_comentario = this.formBuilder.group({
      id_user: [],
      puntuacion: [],
      comentario: [''],
    });

    this.nuevo_comentario.controls['id_user'].setValue(DataService.id_user['id_user']);
    //this.countryForm.controls['country'].setValue(this.default, {onlySelf: true});
   }

  ngOnInit(): void {
  }

  addComentario(userData: any) {
    this.DataService.addComentario(userData).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['']);
      },
      error => {
        console.error(error);
      }
    );
  }

  goback(){
    this.router.navigate(['']);
  }

}
