import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PlayerFormComponent } from './player-form/player-form.component';
import { HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    // PlayerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    // PlayerFormComponent
  ]
})
export class PlayerManagerModule { }
