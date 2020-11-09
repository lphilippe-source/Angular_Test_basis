import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchComponentComponent } from './switch-component/switch-component.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { VirtualkbComponentComponent } from './virtualkb-component/virtualkb-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponentComponent,
    CarouselComponentComponent,
    VirtualkbComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
