import css from "./MovieInfo.module.css";

export default function MovieInfo({movie}) {

    return(

        <div className={css.infoSection}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
            <div className={css.infoDesc}>
                <h2>{movie.title}</h2>
                {movie.vote_average > 0 && (
                    <p><span>User Score: </span>{movie.vote_average.toFixed(1)}</p>
                )}
                {movie.adult && (<><b>Adult:</b><p>18+</p></>)}
                <p><span>Genres: </span>{movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><span>Overview: </span>{movie.overview}</p>
            </div>
        </div>
            
        
    )
}