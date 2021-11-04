import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';


@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit {

  menu: any[] = [

  ]
  constructor(
    private menuService: DataService
  ) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data: any) =>{
      this.menu = data;

    })
  }

}