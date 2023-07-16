interface Tag {
  title: string
  url: string
  id: string
}

export interface FormNews {
  title: string
  description: string
}

export interface News extends FormNews {
  ID: string
  date: string
  link: string
  isTop: boolean
  commentsCount: number
  viewCount: number
  tags: Tag[]
  image: string
  imageSource: string
  imageSmall: string
  imageMiddle: string
}

export interface NewsWithAnimationText extends News {
  expanded?: boolean
}
