import { Link, useLocation } from "react-router-dom";

const MoviesList = ({movies}) =>{

    const location = useLocation();
    // console.log(location)

    return(
        <div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default MoviesList;