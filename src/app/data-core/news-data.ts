import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class NewsData {
  constructor(private http: HttpClient) {}

  public getNews() {
    return this.http.get('./assets/data/news.json')
  }
}
