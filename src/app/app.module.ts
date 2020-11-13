import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { SwitchComponentComponent } from './switch-component/switch-component.component';
// import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
// import { VirtualkbComponentComponent } from './virtualkb-component/virtualkb-component.component';
// import { ParentShirtComponent } from './parent-shirt/parent-shirt.component';
// import { ChildPriceComponent } from './child-price/child-price.component';
// import { ChildEventMiniatureComponent } from './child-event-miniature/child-event-miniature.component';
import { PlayerFormComponent } from './player-manager/player-form/player-form.component';
import { PlayerManagerModule } from './player-manager/player-manager.module';
// import { FruitComponent } from './fruit/fruit.component';
// import { MainComponent } from './fruit/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    // SwitchComponentComponent,
    // CarouselComponentComponent,
    // VirtualkbComponentComponent,
    // ParentShirtComponent,
    // ChildPriceComponent,
    // ChildEventMiniatureComponent,
    // FruitComponent,
    // MainComponent
    PlayerFormComponent

  ],
  imports: [
    BrowserModule,
    PlayerManagerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
