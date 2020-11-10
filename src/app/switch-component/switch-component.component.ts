import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.css']
})
export class SwitchComponentComponent {
  toggle:string = 'oui'
  constructor(){
    // console.log(1)
  }


  toggleButton(str){
    if(str=='oui'){
      this.toggle='non'
      console.log(0)
    }
    else {
      this.toggle='oui' 
      console.log(1)
    }
  }
}

