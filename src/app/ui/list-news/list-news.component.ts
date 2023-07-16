import { animate, state, style, transition, trigger } from '@angular/animations'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NewsWithAnimationText } from 'src/app/models/news.model'

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss'],
  animations: [
    trigger('expandAnimation', [
      state('collapsed', style({ height: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListNewsComponent {
  @Input() public news!: NewsWithAnimationText[]

  public toggleContent(item: NewsWithAnimationText): void {
    item.expanded = !item.expanded
  }
}
