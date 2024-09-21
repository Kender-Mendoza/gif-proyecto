import { useEffect, useState } from "react";
import { GifData } from "../types/types";

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState([]);

  const getGifts = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${category}&limit=5`;
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
