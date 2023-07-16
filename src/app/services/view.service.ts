import { ElementRef, Injectable, QueryList } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  public equalizeSlideHeights(slideElements: QueryList<ElementRef>): void {
    let maxHeight = 0

    slideElements.forEach((element: ElementRef) => {
      const slideHeight = element.nativeElement.offsetHeight
      maxHeight = Math.max(maxHeight, slideHeight)
    })

    slideElements.forEach((element: ElementRef) => {
      element.nativeElement.style.height = maxHeight + 'px'
    })
  }
}
