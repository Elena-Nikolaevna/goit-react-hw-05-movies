import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "54fe9974191bebd3941b5ae3cdd62e2b";


/// Получить популярные фильмы
export const getTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    const trendingMovies = response.data.results.map(movie => {
        const {id, title} = movie;
        return {
            id,
            title
        }
    })
    return trendingMovies;
};

/// Получать фильмы при поиске
export const getMovieOnSearch = (searchQuery) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            const movieList = data.results.map(movie => {
                const { id, title } = movie;
                return {
                    id,
                    title
                }
            })
    
            if (movieList.length === 0) {
                alert("We can't found anythings, please repeate your request")
                return [];
            }

            return movieList;
        });
}


//Получать информацию о фильме
export const getMovieDetails = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);

    const {vote_average, title, overview, genres, poster_path, release_date} = response.data;

    return {
        vote_average,
        title,
        overview,
        genres, 
        poster_path,
        release_date}
};


/// Получать состав актеров
export const getMovieCast = async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}&language=en-US`);

    const castInfo = response.data.cast.map(a => {
        const {name, character, profile_path, id} = a;
        return {
            name,
            character,
            profile_path,
            id}
    });

    return castInfo;
};


//получать обзоры фильмов
export const getMovieReviews = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    const reviews = response.data.results.map(a => {
        const {id, author, content } = a;
        return {
            id,
            author,
            content}
    });  
    
    return reviews;
}