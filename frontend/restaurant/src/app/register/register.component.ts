import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private DataService: DataService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: [''],
      correo: [''],
      telefono: []
    });
  }


  ngOnInit(): void {
  }

  addUser(userData: any) {
    this.DataService.addUser(userData).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error(error);
      }
    );
  }

  regresar(){
    this.router.navigate(['']);
  }
}
