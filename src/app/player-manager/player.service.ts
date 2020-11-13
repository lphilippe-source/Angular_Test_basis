import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API="http://localhost:3000/players"
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
//importation d'httpclient en tant que propriété
  constructor(private http: HttpClient) { }

  //le service fait une requete ajax vers l'api
  //pour recup les données
  //on fait le get() dans le service
  //le subscribe se fait dans le component
  ajaxGet(){
    return this.http.get(API)
  }
  ajaxPost(body:object){
    return this.http.post(API, body)
  }
}
