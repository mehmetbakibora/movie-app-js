import Search from "./models/Search";
import { elements } from "./base";
import * as searchView from  "./views/searchView"
import * as movieView from  "./views/movieView"
import { Movie } from "./models/Movie";
import { Video } from "./models/Video";
import TopRated from './models/TopRated';
import { displayTopRatedMovies } from './views/homeView';  
import './home'

const state = {};

//Slider

const toggleSliderVisibility = (shouldShow) => {
    const slider = document.getElementById('slider');
    if (shouldShow) {
        slider.classList.remove('d-none');
    } else {
        slider.classList.add('d-none');
    }
};


// SearchController

const searchController = async () => {
    const keyword = elements.searchInput.value;

    if(keyword){
        state.search = new Search(keyword);

        await state.search.getResult();

        searchView.clearInput();
        searchView.clearResults();

        searchView.displayResults(state.search.data)
        
        toggleSliderVisibility(false);
        toggleTopRatedVisibility(false);

    }
        
    else{
        alert('Boş bırakılamaz');
        toggleSliderVisibility(true)
        toggleTopRatedVisibility(true);
    }
}


elements.searchInput.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        searchController();
        console.log('Arama Yapar');
    }
})

// MovieController

const movieController = async () =>{
    const id = window.location.hash.replace('#','')
    if(id){
        state.movie = new Movie(id);
        await state.movie.getMovie();

        state.video = new Video(id);

        await state.video.getVideo();

        movieView.displayMovie(state.movie.data);

        videoController();
        
    }
}

window.addEventListener('hashchange', movieController)

document.body.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'movie-details-close') {
        movieView.closeDetails();
    }
});

// VideoController

const videoController = async () => {
    const id = window.location.hash.replace('#', '');
    if (id) {
        state.video = new Video(id);

        await state.video.getVideo();


        const videoData = state.video.data.results.find(
            video => video.site === 'YouTube' && video.type === 'Trailer'
        );

        if (videoData) {
            movieView.displayVideo(videoData.key); 
        } else {
            console.log('Video bulunamadı.');
        }
    }
};

// Trending Movie Controller

const loadMovies = async () => {
    try {

        const topRated = new TopRated();
        const topRatedMovies = await topRated.getTopRatedMovies();

        
        displayTopRatedMovies(topRatedMovies.results);
    } 
    catch (error) {
        console.error("Error loading movies:", error);
    }
};
loadMovies();

const toggleTopRatedVisibility = (shouldShow) => {
    const topRatedContainer = document.getElementById('top-rated-container');
    if (shouldShow) {
        topRatedContainer.classList.remove('d-none');
    } else {
        topRatedContainer.classList.add('d-none');
    }
};