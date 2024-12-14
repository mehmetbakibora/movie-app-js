import { elements } from '../base'; 

export const displayTopRatedMovies = (movies) => {
    if (elements.topRatedMoviesContainer) {
        const html = movies.map((movie) => `
            <div class="col-flex mb-5">
                <div class="card toprated-card" id="movie-${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                    <div class="card-body" style="background-color: hsla(250, 13%, 11%, 1)">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text badge">⭐${movie.vote_average.toFixed(1)}</p>
                    </div>
                </div>
            </div>
        `).join('');
        elements.topRatedMoviesContainer.innerHTML = html;
    } else {
        console.error("Top Rated Movies container not found!");
    }
};
