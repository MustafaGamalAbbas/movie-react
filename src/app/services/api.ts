import axios from 'axios';

const API_KEY = 'fffc11bad42e01fa3032fb760b319219';
const BASE_URL = 'https://api.themoviedb.org/3/discover';
export const fetchMovies = async () => {
    
  try {
    const res = await fetch(`${BASE_URL}/movie?api_key=fffc11bad42e01fa3032fb760b319219`, { cache: 'force-cache' });
    const response = await res.json();
    console.log(response.results);
    return response.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovie = async (id: String ) => {
    
    try {
       const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fffc11bad42e01fa3032fb760b319219&append_to_response=genres`);
       const movie = await res.json();
      return movie;
    } catch (error) {
      console.error('Error fetching movie:', error);
      return [];
    }
  };
  