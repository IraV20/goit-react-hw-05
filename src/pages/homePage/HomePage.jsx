import {fetchTrandingMovies} from "../../api";
import MoviesList from "../../components/movieList/MovieList";
import { useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";

export default function HomePage( ){

    const [movies, setMovies] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [isError, setIsError] = useState(false);

    // useEffect(() => {

    //     setIsloading(true);
    //     setIsError(false);
    //     fetchTrandingMovies()
    //     .then(data=>{
    //     setMovies(data.results)})
    //     .catch((error) => {
    //     setIsError(true);
    //     })
    //     .finally(() => {
    //     setIsloading(false);    
    //     })
    
    // }, [])

    useEffect(() => {

        async function getMovies() {
            try {
                setIsloading(true);
                setIsError(false);
                const data = await fetchTrandingMovies();
                setIsloading(false);
                setMovies(data.results)
        
            } catch (error) {
                setIsError(true);
            } finally{
                setIsloading(false);    
            }       
        } 
        getMovies();
        
    }, [])

    return(
        <div>
            {isloading && <Loader/>}
            {isError && <p>Oops! There was an error! Try again!</p>}
            {movies.length > 0 && <MoviesList movies={movies}/>}
        </div>
    )
}