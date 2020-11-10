import { Component } from '@angular/core';

// interface Code {
//   src: string;
//   alt: string;
// }
@Component({
  selector: 'app-virtualkb-component',
  templateUrl: './virtualkb-component.component.html',
  styleUrls: ['./virtualkb-component.component.css']
})
export class VirtualkbComponentComponent {

  numberButton:number[]=[0,1,2,3,4,5,6,7,8,9]
  arrEmpty:number[] = new Array(16)
  arrCode = new Array(6)
  code0:string
  code1:string
  code2:string
  code3:string
  code4:string
  code5:string 
  nb:number

  constructor() { 
    this.displayButton()
    this.deleteCode()
  }

  deleteCode=()=>{
    this.arrCode.fill(' _ ')
    this.displayCode()
  }

  displayCode(){
    let checkContent = this.arrCode.map((val,key)=>{
      console.log('key: '+key,'value: '+val)
          this["code"+key]=val
    })
  }

  clickButton(e:string = null){
    if(e){
        let index = this.arrCode.indexOf(' _ ')
      if(index!==(-1)){
        this.arrCode[index]=e
      }
        this.displayCode()
    }
  }

  displayButton():void{

    this.numberButton.map((value)=>{
    
    this.nb = (Math.floor(Math.random()*16))
    while(this.arrEmpty[this.nb]!==undefined){
      this.nb = (Math.floor(Math.random()*16))
    }
    this.arrEmpty[this.nb]=value
    console.log('nombre random indice: '+this.nb+' numéro: '+this.arrEmpty[this.nb])
    })
  }
}
