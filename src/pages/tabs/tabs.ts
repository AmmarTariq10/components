import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {
   tab1Root = 'Home';
    tab2Root = 'About';
    tab3Root = 'Contact';
    tab4Root = 'Post'
  constructor() {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}
