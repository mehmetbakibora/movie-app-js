import { api_key, base_url } from './config';
import { elements } from './base';



const getTrendingMovies = async () => {
    const response = await fetch(`${base_url}/trending/movie/day?api_key=${api_key}`);
    const data = await response.json();
    return data.results;
};

const createSliderItem = (movie, isActive) =>`
    <div class="carousel-item ${isActive ? 'active' : ''}">
        <img src="https://image.tmdb.org/t/p/w780/${movie.backdrop_path}" class="d-block w-100" alt="${movie.title}">
        <div class="carousel-caption d-flex justify-content-center align-items-center">
            <div class="content text-left">
                <h2 class="font-weight-bold text-left">
                    ${movie.title}
                </h2>
                <p class=" font-italic text-left text-uppercase">
                    ${new Date(movie.release_date).getFullYear()} •
                    ${movie.original_language}
                </p>
                <p class="badge badge-dark font-weight-bold badge-lg px-2 py-1">${movie.vote_average.toFixed(1)}</p>
                <p class="font-italic text-left">${movie.overview.slice(0, 100)}...</p>
                <button class="btn btn-warning font-weight-bold d-flex rounded-left"> ▷ Watch Now</button>
            </div>
        </div>
    </div>
`;

const displaySlider = async () => {
    const movies = await getTrendingMovies();
    const sliderContainer = document.getElementById('slider-container');

    movies.slice(0, 5).forEach((movie, index) => {
        sliderContainer.insertAdjacentHTML('beforeend', createSliderItem(movie, index === 0));
    });
};

document.addEventListener('DOMContentLoaded', displaySlider);
