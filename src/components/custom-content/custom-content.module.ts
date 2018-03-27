import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomContent } from './custom-content';

@NgModule({
  declarations: [
    CustomContent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CustomContent
  ]
})
export class CustomContentModule {}
