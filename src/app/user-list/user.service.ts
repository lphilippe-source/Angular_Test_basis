import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API:string = "http://localhost:8080/lunchtime/user/findall"
const API2:string =""
@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http: HttpClient) { }


  getUserList(){
    return this.http.get(API)
  }

}

