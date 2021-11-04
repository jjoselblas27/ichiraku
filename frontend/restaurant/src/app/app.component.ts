import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './_services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-restaurant';
  constructor(
    public DataService: DataService,
    private router: Router
  ){}

  logout() {
    this.DataService.logout();
    this.router.navigate(['']);
  }

}
