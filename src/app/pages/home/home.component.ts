import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Observable, combineLatest, map, takeUntil } from 'rxjs'
import { UiComponent } from 'src/abstract/ui-component'
import { FormNews, News } from 'src/app/models/news.model'
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends UiComponent implements OnInit {
  public news$ = this.newsService.news$
  public lastThreeNews$ = this.newsService.getLastThreeNews()
  public combinedData$: Observable<{ news: News[]; lastThreeNews: News[] }>

  constructor(private newsService: NewsService) {
    super()
    this.combinedData$ = combineLatest([this.news$, this.lastThreeNews$]).pipe(
      map(([news, lastThreeNews]) => ({ news, lastThreeNews })),
    )
  }

  public ngOnInit(): void {
    this.newsService.loadNews().pipe(takeUntil(this.dispose$)).subscribe()
  }

  public addNews(data: FormNews) {
    this.newsService.addNews(data)
  }
}
