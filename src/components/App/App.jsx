import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "../navigation/Navigation";
import MovieCast from "../movieCast/MovieCast";
import MovieReviews from "../movieReviews/MovieReviews";

const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/moviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/movieDetailsPage/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/notFoundPage/NotFoundPage'));

export default function App() {

    return(
        <div>
            <Navigation/>
            <Suspense>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/movies" element={<MoviesPage/>}/>   
                    <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
                        <Route path="cast" element={<MovieCast/>}/>
                        <Route path="reviews" element={<MovieReviews/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>    
                </Routes>
            </Suspense>
        </div>
    )
}
