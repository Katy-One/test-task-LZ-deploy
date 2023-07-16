import { NgModule } from '@angular/core'

import { SharedModule } from 'src/app/shared/shared.module'
import { SingleNewsRoutingModule } from './single-news-routing.module'
import { SingleNewsComponent } from './single-news.component'

@NgModule({
  declarations: [SingleNewsComponent],
  imports: [SharedModule, SingleNewsRoutingModule],
})
export class SingleNewsModule {}
