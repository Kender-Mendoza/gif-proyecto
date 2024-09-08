import { useFetchGifs } from "../hooks/useFetchGifs"

export const CategorySection = ({ category }) => {

  const { gifs } = useFetchGifs(category);

  return (
    <div className="container mb-2">
      <h3> { category } </h3>

      <div className="d-flex justify-content-between">
        {
          gifs.map((gif) => (
            <div className="card w-25 h-100" key={ gif.id }>
              <img className="card-img-top" src={ gif.url }/>
              <div className="card-body">
                <p className="card-text text-center">
                  { gif.title }
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
