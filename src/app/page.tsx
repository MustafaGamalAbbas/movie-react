"use client";

import { useEffect, useState } from 'react';
import { fetchMovies } from './services/api';
import MovieList from './components/MovieList';
import withAuth from './components/withAuth';
import Head from 'next/head';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

 function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
    };

    getMovies();
  }, []);

  return (
    <div>
       
      <MovieList movies={movies} />
    </div>
  );
}
const HomePage = () => {
  return <>
  
    <Home />
  </>;
};
export default withAuth(HomePage); 
