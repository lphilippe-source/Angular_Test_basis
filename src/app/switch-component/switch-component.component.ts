import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.css']
})
export class SwitchComponentComponent {

  

  toggle:string = 'oui'
   
  toggleButton(str){
    if(str=='oui')this.toggle='non'
    else this.toggle='oui'  
  }
}

