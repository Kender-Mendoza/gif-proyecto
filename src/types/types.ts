export type CategoryData = {
  id: string,
  title: string,
  url: string
}

export type GifData = {
  id: string,
  title: string,
  images: {
    fixed_height: {
      url: string
    }
  }
}

export type Category = {
  category: string
}
