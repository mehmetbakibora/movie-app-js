import { elements } from "../base";

export const closeDetails = (e) =>{
    elements.movieDetailsContainer.classList.remove('d-block')
}

export const displayMovie = movie =>{

    let html = '<div class="row mb-5 justify-content-center">';

    var genres = "";

    (movie.genres || []).forEach(genre => {
        genres += `<span class="badge badge-warning ml-1">${genre.name}</span>`;
    });

    html += 
        `
            <div class="col-md-4">
                <img src="https://media.themoviedb.org/t/p/w500/${movie.poster_path}" onerror="this.src='https://via.placeholder.com/154x231'" class="mr-3 img-fluid rounded-lg" alt="${movie.title}">
            </div>
            <div class="col-md-6">
                <div>
                    <h4 class="d-flex  align-items-center text-xl font-weight-bolder">
                        ${movie.original_title}
                        <p class="badge badge-warning mb-0 ml-2">${movie.vote_average.toFixed(1)}</p>
                        <button id="movie-details-close" class="btn btn-danger ml-auto rounded-circle">✕</button>
                    </h4>
                    <p class="text-justify mt-3">${movie.overview}</p>
                    <hr class="badge-warning">
                    ${genres}
                    <div id="movie-video-container">
                        
                    </div>
                </div>
            </div>
        `
    html += '</div>';


    elements.movieDetails.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    elements.movieDetailsContainer.classList.add('d-block');
    elements.movieDetails.innerHTML = html;
}

export const displayVideo = videoKey => {
    const videoHTML = `
        <div class="embed-responsive embed-responsive-16by9 mt-4">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoKey}" allowfullscreen"></iframe>
        </div>
    `;  
    document.getElementById('movie-video-container').innerHTML = videoHTML;
};