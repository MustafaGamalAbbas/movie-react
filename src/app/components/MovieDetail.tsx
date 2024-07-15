import styles from './MovieDetail.module.css';

type MovieDetailProps = {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    release_date: string;
    genres: { id: number; name: string }[];
    episode_count: number;
  };
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (

    <div className={styles.container}>
      <div className={styles.backgroundWrapper}>
        <div className={styles.background} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})` }}></div>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className={styles.details}>
            
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.meta}>
            {movie.episode_count} Episodes • {new Date(movie.release_date).getFullYear()} •{' '}
            {movie.genres.map(genre => genre.name).join(', ')}
          </p>
          <div className={styles.buttons}>
            <button className={styles.continue}>Continue Watching</button>
            <button className={styles.watchlist}>Add to Watchlist</button>
            <button className={styles.download}>Download</button>
            <button className={styles.share}>Share</button>
            <button className={styles.like}>Like</button>
          </div>
          <h2 className={styles.storyLine}>Story Line</h2>
          <p className={styles.overview}>{movie.overview}</p>
          
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
