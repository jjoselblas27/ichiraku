import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
    menu= [
      {plato_id:"",
      name_plato:"",
      tipo_plato:"",
      price:""
    }
    ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) { }
  
  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(
        data => {
          const plato_id = data.get('plato_id');

          this.dataService.getMenu().subscribe(
            response => {
              console.log(response);
              this.menu = response
            },
          error => {
            console.error(error);
          }
        )
      }
    )
  }
}


