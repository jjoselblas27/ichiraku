import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-reservaciones-new',
  templateUrl: './reservaciones-new.component.html',
  styleUrls: ['./reservaciones-new.component.scss']
})
export class ReservacionesNewComponent implements OnInit {

  reservacionesForm : FormGroup;

  constructor(
    private FormBuilder : FormBuilder,
    private DataService : DataService,
    private Router : Router
  ) { 
    this.reservacionesForm = this.FormBuilder.group({
      nombre: [''],
      n_personas: [''],
      tipo_mesa: [''],
      hora_reservacion: [''],
      fecha: [''],
      correo: [''],
      telefono: ['']      
    });
  }

  ngOnInit(): void {
  }

  addReserva(values:any){
    this.DataService.addReserva(values).subscribe(
      response => {
        console.log(response);
        //this.router.navigate(['/home/reservaciones/']);        
      },
      error => {
        console.error(error);
      }
    );
  }

}
