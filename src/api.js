import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2RjZTRhYzFmNzFmOTE0YjAwY2I1MmI2MTQ4ODEwOCIsInN1YiI6IjY2NWYwOWEzNDI1M2U5ZWEwYzIzNTEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6sUkz8itk_tVCtUlP5113FLG7y_JrMaGHgHiyYgbrps"


export const getTrendingMovie = async () =>{
    const res = await axios.get("/trending/movie/day?language=en-US", {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        },
    });
    console.log('Trending Movies:', res.data);    return res.data.results;

}

export const searchMovie = async (query, page) =>{
    const res = await axios.get("/movie?include_adult=false&language=en-US&page=1", {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }, 
            params:{
                query: query,
                page: page
            }
    });
    return res.data.results;
}

export const getMovieDetails = async (id) =>{
    const res = await axios.get(`/movie/${id}?language=en-US`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        },
    });
    return res.data.results;
}

export const getMovieCredits = async (id) =>{
    const res = await axios.get(`/movie/${id}/credits?language=en-US`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        },
    });
    return res.data.results;
}

export const getMovieReviews = async (id) =>{
    const res = await axios.get(`/movie/${id}/reviews?language=en-US`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        },
    });
    return res.data.results;
}



