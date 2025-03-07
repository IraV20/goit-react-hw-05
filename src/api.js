import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwM2RjZTRhYzFmNzFmOTE0YjAwY2I1MmI2MTQ4ODEwOCIsIm5iZiI6MTcxNzUwNDQxOS45NDEsInN1YiI6IjY2NWYwOWEzNDI1M2U5ZWEwYzIzNTEzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7r8WCyVBryiCiHzInJXdR3Yv2oCOsAaqIbIwPY0AK4I'
    }
  };

export const fetchTrandingMovies = async () => {
    const res = await axios.get('trending/movie/day?language=en-US', options)

    // console.log('Trending Movies:', res.data);
    return res.data;
}

export const searchMovies = async (query) => {
    const res = await axios.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
    
    // console.log(res.data);
    return res.data;    
}

export const getMoviesDetails = async(movieId) =>{
    const res = await axios.get(`/movie/${movieId}?language=en-US`, options)

    // console.log(res.data);
    return res.data;
}

export const getMoviesCredits = async(movieId) =>{
    const res = await axios.get(`/movie/${movieId}/credits?language=en-US`, options)

    // console.log(res.data);
    return res.data;
}

export const getMoviesReviews = async(movieId) =>{
    const res = await axios.get(`/movie/${movieId}/reviews?language=en-US`, options)

    // console.log(res.data);
    return res.data;
}