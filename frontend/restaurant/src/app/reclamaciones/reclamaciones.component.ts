import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.scss']
})
export class ReclamacionesComponent implements OnInit {
  
  reclamacionesForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private DataService: DataService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }




  addReclamo(values:any){
    this.DataService.addReclamo(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['']);
      },
      error => {
        console.error(error);
      }
    );
  }




  private buildForm() {
    this.reclamacionesForm = this.formBuilder.group({
      nombre: ['',  [Validators.required]],
      apellido_p:['', [Validators.required]],
      apellido_m:['', [Validators.required]],
      direccion:['', [Validators.required, Validators.maxLength(500)]],
      tipo_documento: ['', [Validators.required]],
      documento: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      edad:['', [Validators.required]],
      reclamo: ['', [Validators.required, Validators.maxLength(200)]],
    });


    this.reclamacionesForm.valueChanges
    .subscribe(value => {
      console.log(value);
    });  
  }

}



