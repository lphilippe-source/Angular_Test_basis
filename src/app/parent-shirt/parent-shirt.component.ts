import { Component, OnInit } from '@angular/core';
interface Image{
  readonly thumbs:Thumb
  readonly badges:Badge
}
interface Thumb{
  image1:Jpg
  image2:Jpg
  image3:Jpg
  image4:Jpg
}
interface Badge{
  badge1:Jpg
  badge2:Jpg
  badge3:Jpg
}
interface Jpg{
  readonly url:string
  readonly alt:string
}
interface List{
  name:string
  numero:string
}

@Component({
  selector: 'app-parent-shirt',
  templateUrl: './parent-shirt.component.html',
  styleUrls: ['./parent-shirt.component.css']
})
export class ParentShirtComponent implements OnInit {

shirt:Image ={
  thumbs:{
    image1:{
      url:"assets/images/1.jpg",
      alt:"front"
    },
    image2:{
      url:"assets/images/2.jpg",
      alt:"front_italia"
    },
    image3:{
      url:"assets/images/3.jpg",
      alt:"back"
    },
    image4:{
      url:"assets/images/4.jpg",
      alt:"front_wear"
    }
  },
  badges:{
    badge1:{
      url:"assets/images/badge1.jpg",
      alt:"respect"
    },
    badge2:{
      url:"assets/images/badge2.png",
      alt:"cygames"
    },
    badge3:{
      url:"assets/images/badge3.jpg",
      alt:"italia"
    }
  }
}
playerList:List[]=[
  {
    name:"popol",
    numero:"2"
  },
  {
    name:"jojo",
    numero:"13"
  },
  {
    name:"ptatal",
    numero:"35"
  }
]
mainImg:string
flockText:string = null
flockNumber:number = null
isFlock:number=0
// ** Composant C **
// - d'afficher une image en grand format, à partir d'un clic sur une miniature
  constructor() { }
  ngOnInit(): void {
    this.mainImg = this.shirt.thumbs.image1.url
  }
  
  changeImage(e){
    this.mainImg = e.target.attributes.src.value
  }
  choosePlayer(e){
    if(e.target.value=="Select Player"){
      this.isFlock=0
      return null
    }
    let arrPlayer = e.target.value.split(":")
    this.flockText = arrPlayer[0]
    this.flockNumber =arrPlayer[1]
    this.isFlock=10
  }
}
