import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-zonas-reparto',
  templateUrl: './zonas-reparto.component.html',
  styleUrls: ['./zonas-reparto.component.scss']
})
export class ZonasRepartoComponent implements OnInit {

  reparto: any[] = [

  ]

  constructor(
    private DataService : DataService
  ) { }

  ngOnInit(): void {
    this.DataService.getReparto().subscribe((data: any) =>{
      this.reparto = data;
    })
  }

}
