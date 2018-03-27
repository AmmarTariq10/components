import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomHead } from './custom-head';

@NgModule({
  declarations: [
    CustomHead,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CustomHead
  ]
})
export class CustomHeadModule {}
