import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  
  deleteComentario(data: any){
    //falta completar
    return this.http.delete<any>('http://localhost:3000/members', data);
  }
}
