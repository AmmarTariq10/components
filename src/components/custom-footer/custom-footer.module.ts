import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomFooter } from './custom-footer';

@NgModule({
  declarations: [
    CustomFooter,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CustomFooter
  ]
})
export class CustomFooterModule {}
