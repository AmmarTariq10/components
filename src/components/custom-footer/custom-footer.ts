import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-footer',
  templateUrl: 'custom-footer.html'
})
export class CustomFooter {
@Input('content') footerText

  constructor() {
    console.log('Hello CustomFooter Component');

  }

}
