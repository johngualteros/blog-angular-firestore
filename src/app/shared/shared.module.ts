import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostsComponent } from './card-posts/card-posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardPostsComponent
  ]
})
export class SharedModule { }
