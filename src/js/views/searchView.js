import { elements } from "../base";

export const clearInput = () =>{
    elements.searchInput.value = '';
}

export const clearResults = () =>{
    elements.movieList.innerHTML = '';
}

export const displayResults = data => {
    data.results.forEach(movie => {
        const html =
            `
                <li class="media mb-3">
                    <img src="https://media.themoviedb.org/t/p/w154/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/154x231'" class="mr-3 rounded-lg" alt="${movie.title}">
                    <div class="media-body">
                        <h4 class="mt-0 mb-1 mb-4">
                            <a href="#${movie.id}">${movie.title}</a>
                            <span class="badge badge-warning">${movie.vote_average.toFixed(1)}</span>
                        </h4>
                        <p class="text-justify ml-1">${movie.overview}</p>
                    </div>
                </li>
        `

        elements.movieListContainer.classList.add('d-block');
        elements.movieList.insertAdjacentHTML('beforeend', html);
    })
}