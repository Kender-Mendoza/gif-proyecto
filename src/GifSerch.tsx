import { useState } from "react";
import { Searcher } from "./components/Searcher";
import { CategorySection } from "./components/CategorySection";

export const GifSerch = () => {
  const [categories, setCategories] = useState(new Array());

  const onAddCategory = (category: string): void => {
    const categoryFormated = category.toLowerCase();
    if (categories.includes(categoryFormated)) return;

    setCategories([categoryFormated, ...categories]);
  }

  return (
    <div className="container mt-5">
      <h1> Gif Search </h1>
      <Searcher onAddCategory={onAddCategory} />

      {
        categories.reverse().map((category) => (
          <CategorySection category={category} key={category} />)
        )
      }
    </div>
  )
}
