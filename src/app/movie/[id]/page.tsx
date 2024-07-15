import MovieDetail from "../../components/MovieDetail";
import { fetchMovie } from "../../services/api";
export const metadata ={
    title: "Movie Details",
    description:" A short description of your page's content"
    
};

 export default async function Page(props:any) {
  const movie = await fetchMovie(props.params.id)
  return <MovieDetail movie={movie} />;
}