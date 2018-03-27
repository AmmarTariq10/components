import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { About } from './about';
import { CustomHeadModule } from '../../components/custom-head/custom-head.module';
import { CustomFooterModule } from '../../components/custom-footer/custom-footer.module';
import { CustomContentModule } from '../../components/custom-content/custom-content.module';

@NgModule({
  declarations: [
    About,
  ],
  imports: [
    IonicPageModule.forChild(About),
    CustomHeadModule,
    CustomFooterModule,
    CustomContentModule
  ],
})
export class AboutModule {}
