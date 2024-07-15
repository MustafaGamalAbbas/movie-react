"use client";
import Link from '../../../node_modules/next/link';
import MovieCard from './MovieCard';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type MovieListProps = {
  movies: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    console.log("List Movies: " + movies.length.toString);  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap',  justifyContent: 'center' }}>
      {movies.map(movie => (
        <Link href={`/movie/${movie.id}`}>
         <MovieCard key={movie.id} movie={movie} />
        </Link>
       
      ))}
    </div>
  );
};

export default MovieList;
