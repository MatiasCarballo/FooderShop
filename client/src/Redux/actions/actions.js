import {  GET_PRODUCT  } from "../actionsType/actionsType"
import axios from 'axios'
// export function getMostPopulars(page){
//   return (dispatch)=>{
//     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}
//     `)
//         .then(response => response.json())
//         .then(datos => {
//          let maps = datos.results.map(el => {
//             return{
//               adult: el.adult,
//               backdrop_path: el.backdrop_path,
//               id: el.id,
//               originalLanguaje: el.original_language,
//               originalTitle: el.original_title,
//               sinopsis: el.overview,
//               poster_path: el.poster_path,
//               fechaLanzamiento: el.release_date,
//               title:el.title,
//               video: el.video,
//               genre_ids: el.genre_ids,
//               vote_average: el.vote_average,
//               vote_count: el.vote_count,
//               image: `https://image.tmdb.org/t/p/w200${el.poster_path}`
//             }
//           })
//           dispatch({
//             type: GET_MOST_POPULARS,
//             payload: maps
//           })
//     })
//     .catch(err => console.error(err))

//   }
// }

export const getPrduct = ()=>{
    return async (dispatch) => {
        
        const products = await axios.get(`http://localhost:5000/product`)
        dispatch({
          type: GET_PRODUCT,
          payload: products.data,
        });
        // console.log(products);
      };
}

