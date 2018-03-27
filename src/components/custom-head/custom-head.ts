import { Component, Input } from '@angular/core';


@Component({
  selector: 'custom-head',
  templateUrl: 'custom-head.html'
})
export class CustomHead {

@Input('name') pageName

  constructor() {
    console.log('Hello CustomHead Component');
 
   
  }
}
