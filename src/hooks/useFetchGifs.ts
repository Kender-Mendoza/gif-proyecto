
import { useEffect, useState } from "react";

type GifData = {
  id: string,
  title: string,
  images: {
    fixed_height: {
      url: string
    }
  }
}

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState([]);

  const getGifts = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=w4B74Ot0KSvUcT0TJWLz4jVl7Ml04NiY&q=${category}&limit=5`;
    const response = await fetch(url);
    const { data } = await response.json();

    return data.map((element: GifData) => {
      return {
        id: element.id,
        title: element.title,
        url: element.images.fixed_height.url
      }
    })
  }

  useEffect(() => {
    getGifts().then((elements) => {
      setGifs(elements);
    });
  }, [category]);

  return {
    gifs
  }
}
