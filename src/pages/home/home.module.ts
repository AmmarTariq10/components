import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { CustomHeadModule } from '../../components/custom-head/custom-head.module';
import { CustomContentModule } from '../../components/custom-content/custom-content.module';
import { CustomFooterModule } from '../../components/custom-footer/custom-footer.module';

@NgModule({
  declarations: [
    Home,
  ],
  imports: [
    IonicPageModule.forChild(Home),
    CustomHeadModule,
    CustomContentModule,
    CustomFooterModule
  ],
})
export class HomeModule {}
