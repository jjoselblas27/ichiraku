import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.scss']
})
export class ReclamacionesComponent implements OnInit {
  

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  private buildForm() {
    this.reclamaciones = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      text: new FormControl('', [Validators.maxLength(200)]),
      category: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });

    this.reclamaciones.valueChanges
    .subscribe(value => {
      console.log(value);
    });
  }

}

