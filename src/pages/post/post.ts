import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class Post {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Post');
  }

}
