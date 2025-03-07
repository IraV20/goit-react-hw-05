import SearchBox from "../../components/SearchBox/SearchBox";
import MoviesList from "../../components/movieList/MovieList";
import {searchMovies} from "../../api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {


    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // const [userQuery, setUserQuery] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const userQuery = searchParams.get('movie') ?? " ";

    useEffect(() => {

        if (!searchParams){
            return;
        };

        async function getMovies() {
            try {
                setIsLoading(true);
                setIsError(false);
                const data = await searchMovies(userQuery)
                setIsLoading(false);
                setMovies(data.results);
    
            } catch (error) {
                setIsError(true);
            } finally{
                setIsLoading(false);
            }
            
        }
    
        getMovies();
    
      
    }, [searchParams])
    
    // const handleSearch = async (value) =>{
    //     setUserQuery(value);
    // }
    const handleSearch = newSearch =>{
        if(newSearch === ""){
            searchParams.delete('movie');
        } else{
            searchParams.set('movie', newSearch);

        }
        setSearchParams(searchParams);
        // setMovies([]);
    }
    
    return(
        <div>
            <SearchBox searchValue={userQuery} onSubmit={handleSearch}/>
            {isLoading && <p>Please wait, we are search for movies..</p>}
            {isError && <p>Oops! There was an error! Try again!</p>}
            {movies.length > 0 && <MoviesList movies={movies}/>}
        </div>

    )
}