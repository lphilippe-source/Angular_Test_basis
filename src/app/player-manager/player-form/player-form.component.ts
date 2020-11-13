import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { map, filter, scan } from 'rxjs/operators';
@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

//   En vous inspirant de la capture, créer une application Angular
// multi-composant permettant de:
// - réaliser des opérations CRUD sur une entité "Player"
// - filter les joueurs par équipe et par poste

// Un service exposera les fonctionnalités d'accès aux données
// aux composants qui en auront besoin.

// On utilisera le package json-server (https://www.npmjs.com/package/json-server)
// pour simuler l'API REST
player:object[]
//importation du player service de player.service en tant que proprieté
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.showPlayerList()
  }
  //instance de player service en tant que props
  // subscribe prend en parametre la reponse
  showPlayerList(){
    this.playerService.ajaxGet().subscribe((player:any)=>{
    this.player=player
    console.log(player)
    })
  }
  addPlayer(e){
    let newPlayer:object={
      id:null,
      firstname:e,
      lastname:e,
      teamid: 1,
      position: "milieu",
      age: 23
      
    }
    this.playerService.ajaxPost(newPlayer).subscribe((newPlayer:object)=>{
      this.player.push(newPlayer)
    })
  }
  searchPlayer(e){
    this.playerService.ajaxGet().pipe(
      map((val,keys) => Object.values(val) )
    ).subscribe((player:any)=>{
      // this.player.map.indexOf(e)
      console.log(player)
      })
  }
}
