
import { Component, EventEmitter, OnInit } from '@angular/core';
import { UserService } from '../user.service';

interface Body {
id:number
wallet:number
firstname:string
name:string
}
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
  isValid:any = false
user={
  id:0,
  wallet:0,
}
// Champs à afficher: name, firstname, wallet

// L'application doit permettre d'augmenter ou de diminuer le montant du "wallet"
// en effectuant les requêtes ajax correspondantes et afficher un message dans 
// l'interface afin d'informer l'utilisateur de l'issue de sa requête
errors?:any
message?:string
users:any[]
wallet?:number
id ?: number
body: Body=
  { 
    id: 0, wallet: 0, firstname:"", name:""
  }

  constructor(protected UserService: UserService) { }

  ngOnInit(): void {
    this.getList()
    // besoin pour actualiser le bouton apres l'affichage de la list car une variable n'est pas encore créer.
    this.changeValid()
  }
  changeValid(){
    this.isValid = true
  }
  getList(){
    this.UserService.getUserList().subscribe((list:[])=>{
      this.users=list
      console.log(this.users)
    })
  }
  eraseMessage(){
    this.message=null
    this.errors=null
  }
  editUser(e:number,id:number){
    this.wallet=e
    this.id = id
    //update du front
    this.users[id-1].wallet=e
    //supp des messages, erreur etc..
    this.eraseMessage()
  }
  submitWallet(newWallet:string){//entrée venant de l'input type text
    console.log(typeof newWallet) //string
     let newW = parseFloat(newWallet)
    console.log(typeof newW)
    if(isNaN(newW)){// entre toujours dans la condition
      this.eraseMessage()
      return this.message = `entrez un nombre et pas ${newWallet} svp`
    }
    if(this.wallet && this.id){
      //requete ajax
      this.wallet=newW
      console.log(this.wallet, this.id)
      //function updateList avec l'id
      this.UserService.sendValueWallet(this.wallet, this.id,this.body).subscribe(
        (body:Body)=>{
          this.editUser(body.wallet, body.id)
          console.log(body)
          this.eraseMessage()
          this.message = `la cagnotte de ${body.firstname} ${body.name} a bien été mise à jour `
        },
        error => {
          // console.log(error)
          this.errors = error;
        }
        )
    }
  }
}
