import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from './user-component/user-component.component';
import { EditComponent } from './edit/edit.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [UserComponentComponent, EditComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponentComponent,
    EditComponent
  ]
})
export class UserListModule { }
