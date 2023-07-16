import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleNewsComponent {
  constructor() {}
}
