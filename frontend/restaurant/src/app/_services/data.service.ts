import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  id_user: any ;
  constructor(
    private http: HttpClient
  ) { }
  
    // LOGIN
    login(loginData: any) {
      return this.http.post<any>('http://localhost:3000/login', loginData).pipe(map(response => {
        this.setCurrentUser(response);
        return response;
      }));
    }
    addUser(user: any) {
      return this.http.post<any>('http://localhost:3000/register', user);
    }
  
    setCurrentUser(user: any) {
      this.id_user = user;
    }
  
    getCurrentUser() {
      return this.id_user;
    }
  
    isLoggedIn() {
      return Boolean(this.id_user);
    }
  
    logout() {
      this.id_user = null;
    }


  getMenu(){
    return this.http.get<any>('http://localhost:3000/menu');
  }


  deleteComentario(data: any){
    return this.http.delete<any>('http://localhost:3000/deleteComentarios', data);
  }
  getComentarios(){
    return this.http.get<any>('http://localhost:3000/Comentarios')
  }
  addComentario(coments:any){
    return this.http.post<any>('http://localhost:3000/Comentarios_new', coments)
  }
  

}
