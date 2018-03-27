import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Post } from './post';
import { CustomHeadModule } from '../../components/custom-head/custom-head.module';
import { CustomFooterModule } from '../../components/custom-footer/custom-footer.module';


@NgModule({
  declarations: [
    Post,
  ],
  imports: [
    IonicPageModule.forChild(Post),
    CustomHeadModule,
    CustomFooterModule
  ],
})
export class PostModule {}
