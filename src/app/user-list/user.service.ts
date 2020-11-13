import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface User{
  id:number
  wallet:number
}
const API:string = "http://localhost:8080/lunchtime/user/findall"
const API2:string ="http://localhost:8080/lunchtime/user/credit/"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  


  constructor(private http: HttpClient) { }

  getUrl(){

  }
  getUserList(){
    return this.http.get(API)
  }

  sendValueWallet(user:User, wallet){
    return this.http.post(API2 +user.id+"?amout="+user.wallet, wallet)
  }
}

