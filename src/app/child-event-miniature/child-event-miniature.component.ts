import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-event-miniature',
  templateUrl: './child-event-miniature.component.html',
  styleUrls: ['./child-event-miniature.component.css']
})
export class ChildEventMiniatureComponent implements OnInit {

//   ** Composant A **
// - flocker le maillot (de dos, image 3)
// Le clic sur le bouton "Players" affiche un menu déroulant contenant une liste
// de noms de joueurs. La sélection d'un nom provoque son affichage sur le
// maillot ainsi que le numéro associé (Exemple: Buffon => 1).
// Les infos concernant les joueurs (nom, numéro) proviennent d'un service.
  @Input() flockText:string
  @Input() flockNumber:number
  @Output() changingPlayer = new EventEmitter()
  @Input()playerList = []
  @Input()mainImg:string
  constructor() { }

  ngOnInit(): void {
  }
  onPlayerChange(e){
    this.changingPlayer.emit(e)
  }
  flockImage(){
    if(this.mainImg=="assets/images/3.jpg")return true
  }
}
