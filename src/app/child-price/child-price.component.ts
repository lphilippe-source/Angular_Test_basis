import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-price',
  templateUrl: './child-price.component.html',
  styleUrls: ['./child-price.component.css']
})
export class ChildPriceComponent implements OnInit {
@Input()shirt
@Input()isFlock:number=0
total:number=0
badgeNumber:number=0
quantity:number=120
  constructor() { 
    console.log(this.shirt)
  }
  // ** Composant B **
  // - déterminer un total incluant le prix:
  //     du maillot (prix unitaire: 120 EUR)
  //     de la quantité choisie
  //     du flocage (10EUR)
  //     des badges choisis (10 EUR par badge)
  ngOnInit(): void {
  }
  isChecked(e){
    if(e.target.checked==true){
      this.badgeNumber+=10
    }else{
      this.badgeNumber-=10
    }
  }
 selectQuantity(e){
   console.log(typeof e.target.value)
   let result = parseInt(e.target.value,10)
   this.quantity= result*120
 }
  doTotal(){
    console.log(this.isFlock,  this.badgeNumber, this.quantity)
    return (this.isFlock + this.badgeNumber + this.quantity)
  }

}
