import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
user={
  id:0,
  wallet:0,
}
users:[]
wallet:number = 0
// addCredit:number = 0
id:number
  constructor(protected UserService: UserService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.UserService.getUserList().subscribe((list:[])=>{
      this.users=list
      // console.log(this.users)
    })
  }
  editUser(e){
    this.wallet=e
  }
  send(){
    this.UserService.sendValueWallet
    
  }
  submitWallet(wallet,id){
    this.user.wallet = wallet
    this.user.id = id
    this.send(this.user,this.user)
    console.log(id)
  }
}
