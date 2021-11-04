import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private DataService: DataService ,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
  }

  makeLogin(loginData: any) {
    this.DataService.login(loginData).subscribe(
      response => {
        console.log(response);
        if(response) {
          this.router.navigate(['']);
        }
        else{
          alert("Usuario Incorrecto");
        }
        
      },
      error => {
        console.error(error);
      }
    );
  }

}
