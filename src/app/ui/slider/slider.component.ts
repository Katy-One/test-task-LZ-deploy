import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { OwlOptions } from 'ngx-owl-carousel-o'
import { UiComponent } from 'src/abstract/ui-component'
import { sliderOptions } from 'src/app/const/const'
import { News } from 'src/app/models/news.model'
import { ViewService } from 'src/app/services/view.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent extends UiComponent implements AfterViewInit {
  sliderOptions: OwlOptions = sliderOptions
  @Input() news: News[] | null = []
  @ViewChildren('slideElement', { read: ElementRef }) slideElements!: QueryList<
    ElementRef
  >

  constructor(private viewService: ViewService) {
    super()
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewService.equalizeSlideHeights(this.slideElements)
    }, 100)
  }
}
