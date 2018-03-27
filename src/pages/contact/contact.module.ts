import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contact } from './contact';
import { CustomHeadModule } from '../../components/custom-head/custom-head.module';
import { CustomFooterModule } from '../../components/custom-footer/custom-footer.module';
import { CustomContentModule } from '../../components/custom-content/custom-content.module';

@NgModule({
  declarations: [
    Contact,
  ],
  imports: [
    IonicPageModule.forChild(Contact),
    CustomHeadModule,
    CustomFooterModule,
    CustomContentModule

  ],
})
export class ContactModule {}
