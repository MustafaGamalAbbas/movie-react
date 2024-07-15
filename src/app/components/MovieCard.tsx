import styles from './MovieCard.module.css';

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
  };
  
  type MovieCardProps = {
    movie: Movie;
  };
  
  const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className={styles.card}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={styles.image} />
          <div className={styles.details}>
            <h2 className={styles.title}>{movie.title}</h2>
            <div className={styles.rating}>
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className={index < Math.round(movie.vote_average / 2) ? styles.starFilled : styles.starEmpty}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      );
  };
  
  export default MovieCard;
  