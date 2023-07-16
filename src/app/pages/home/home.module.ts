import { NgModule } from '@angular/core'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CarouselModule } from 'ngx-owl-carousel-o'
import { MaterialModule } from 'src/app/shared/material.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { FormAddNewsComponent } from 'src/app/ui/form-add-news/form-add-news.component'
import { ListNewsComponent } from 'src/app/ui/list-news/list-news.component'
import { SliderComponent } from 'src/app/ui/slider/slider.component'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    ListNewsComponent,
    FormAddNewsComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
