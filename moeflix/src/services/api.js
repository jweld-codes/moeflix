const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async() => {
    const resp = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await resp.json()
    return data.results
};

export const searchMovies = async(query) => {
    const resp = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await resp.json()
    return data.results
};
