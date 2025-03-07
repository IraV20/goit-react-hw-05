import {getMoviesDetails} from "../../api";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import css from "./MovieDetailsPage.module.css"

import Loader from "../../components/loader/Loader";
import MovieInfo from "../../components/movieInfo/MovieInfo";

const getClassLink = ({isActive}) => clsx(css.link, isActive && css.isActive)

export default function MovieDetailsPage(){

    const {movieId} = useParams();

    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const location = useLocation();
    // console.log(location);

    // const backLinkHref = location.state ?? "/movies";
    const backLinkRef = useRef(location.state ?? "/movies");
    // console.log(backLinkRef);

    useEffect(() =>{

        async function getMovieById() {
            try {
                setIsLoading(true);
                setIsError(false);
                const data = await getMoviesDetails(movieId);
                // console.log(data);
                setIsLoading(false);
                setMovie(data)
            } catch (error) {
                setIsError(true)
            } finally{
                setIsLoading(false)
            }
            
        }
        getMovieById(movieId);

        
    }, [movieId])

    return(
        <div>
            {isLoading && <Loader/>}
            {isError && <p>Oops! There was an error! Try again!</p>}
            <p><b><Link to={backLinkRef.current}>Go back</Link></b></p>
            {movie && <MovieInfo movie={movie}/>}
            <div>
                <h3>Additional section</h3>
                <ul>
                    <li><NavLink className={getClassLink} to="cast">Cast</NavLink></li>
                    <li><NavLink className={getClassLink} to="reviews">Reviews</NavLink></li>
                </ul>
            </div>
            <Outlet/>
        </div>
    )
}