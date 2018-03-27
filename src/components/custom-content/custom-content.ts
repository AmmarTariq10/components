import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-content',
  templateUrl: 'custom-content.html'
}) 

export class CustomContent {

  @Input('content') contentText
  
  constructor() {
    console.log('Hello CustomContent Component');
   
  }

  ngAfterViewInit(){
     console.log(this.contentText)
  }

}
