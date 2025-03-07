import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getMoviesReviews} from "../../api";
import css from "./MovieReviews.module.css";

export default function MovieReviews(){

    const {movieId} = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      async function fetchReviews() {
        try {
            setIsLoading(true);
            setIsError(false);
            const data = await getMoviesReviews(movieId);
            setIsLoading(false);
            setReviews(data.results);    
        } catch (error) {
            setIsError(true);
            
        }finally{
            setIsLoading(false);
        }
        
      }

      fetchReviews()
    
    }, [movieId])
    


    return(
        <div>
            {isLoading && <p>Please wait, we are search for movies..</p>} 
            {isError && <p>Oops! There was an error! Try again!</p>}
            {!isLoading && reviews.length === 0 && <p>No review available.</p>}
            {reviews.length > 0 && (
                <ul>
                    {reviews.map((review => (
                        <li key={review.id} className={css.reviewItem}>
                            <b>{review.author}:</b>
                            <p>{review.content}</p>
                        </li>
                    )))}
                </ul>
            )}
        </div>
    )
}