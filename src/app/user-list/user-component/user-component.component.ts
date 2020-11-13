import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {

users:[]
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.UserService.getUserList().subscribe((list:[])=>{
      this.users=list
      console.log(this.users)
    })
  }
  editUser(e){
    console.log(e)
  }
}
