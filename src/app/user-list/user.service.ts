import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// export interface User{
//   id:number
//   wallet:number
// }
const API:string = "http://localhost:8080/lunchtime/user/findall"
const API2:string ="http://localhost:8080/lunchtime/user/credit/"
const API3:string = "http://localhost:8080/lunchtime/user/debit/"
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
  // setValue(wallet, id, body){
  //   this.sendValueWallet(id,wallet,body)
  // }
  sendValueWallet(wallet:number, id:number,body){
    if(wallet>0){
    return this.http.post(API2 +id+"?amount="+wallet, body)
    }else{
    return this.http.post(API3 +id+"?amount="+Math.abs(wallet), body)
    }
  }
}

