import {getMoviesCredits} from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";

export default function MovieCast() {

    const {movieId} = useParams();

    const [cast, setCast] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        async function fetchCast() {
            try {        
                setIsloading(true);
                setIsError(false);
                const data = await getMoviesCredits(movieId);
                setIsloading(false);
                setCast(data.cast);     
            } catch (error) {
                setIsError(true);
            } finally{
                setIsloading(false);
            }
        }

        fetchCast();

    }, [movieId])
    
     
    return(
        <div>
            {isloading && <p>Please wait, we are search for movies..</p>} 
            {isError && <p>Oops! There was an error! Try again!</p>}
            {cast.length > 0 && (
                <ul>
                    {cast.map((actor) => (
                        <li key={`${actor.id}-${actor.character}`} className={css.castItem}>
                            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                            <b>{actor.name}</b>
                            <p>{actor.character}</p>
                        </li>

                    ))}
                </ul>
            ) }
        </div>
    )
    
}