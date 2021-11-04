import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }
  

  getMenu(){
    return this.http.get<any>('http://localhost:3000/menu');
  }


  deleteComentario(data: any){
    return this.http.delete<any>('http://localhost:3000/deleteComentarios', data);
  }
}
