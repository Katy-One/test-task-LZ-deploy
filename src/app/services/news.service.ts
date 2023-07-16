import { Injectable } from '@angular/core'
import { BehaviorSubject, map, switchMap, take, tap } from 'rxjs'
import { NewsData } from '../data-core/news-data'
import { FormNews, News } from '../models/news.model'

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  public news$ = new BehaviorSubject<News[]>([])
  public lastNews$ = new BehaviorSubject<News[]>([])
  private news: News[] = []

  constructor(public newsData: NewsData) {}

  public loadNews() {
    return this.newsData.getNews().pipe(
      map((data: Object) => {
        this.news = data as News[]
        this.news$.next(this.news)
        this.lastNews$.next(this.news)
        return data
      }),
    )
  }

  public getLastThreeNews() {
    return this.lastNews$.pipe(map((news: News[]) => news.slice(-3)))
  }

  public addNews(news: FormNews) {
    const updatedNews = {
      ...this.getOneNews(),
      title: news.title,
      description: news.description,
    }
    this.news.push(updatedNews)
    this.news$.next(this.news.slice())
  }

  private getOneNews() {
    const news = this.news$.getValue()
    const randomIndex = Math.floor(Math.random() * news.length)
    return news[randomIndex]
  }
}
