import { Component } from '@angular/core';
import { setInterval } from 'timers-browserify';

interface Image {
  src: string
  alt: string
}


@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponentComponent{

  arr:string[] = [
    'https://c.pxhere.com/photos/27/7b/scotland_centralscotland_benmore_stobbinnein_crianlarich_scotspine_mountains_landscape-267332.jpg!d',
    'https://static.nationalgeographic.fr/files/styles/image_3200/public/01_booktalk_wolves_0.jpg?w=800&h=450',
    'https://c.pxhere.com/photos/cb/f6/scotland_highlands_westhighlands_glencoe_buachailleetivebeag_bennevis_landscape_canon6d-383013.jpg!d',
    'https://c.pxhere.com/photos/ee/84/fuchs_wildpark_poing_animal_wildlife_photography_nature_animal_world_animal_portrait_mammal-811179.jpg!d',

  ]
  constructor(){
    this.toggleImage()
  }
  newIndice:number = 0

  image: Image = {
    src: this.arr[this.newIndice],
    alt: "Caroussel Images"
  }

  incrementList=():string=>{
    this.newIndice +=1
    this.newIndice>3?this.newIndice=0:null
    return this.arr[this.newIndice]
  }

  toggleImage():void{
    setInterval(() => {
      this.image.src = this.incrementList()
    }, 3000);
  }
}
