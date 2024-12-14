import { api_key, base_url } from "../config";

export class TopRated {
    constructor() {
        this.url = `${base_url}/movie/top_rated`; 
    }

    async getTopRatedMovies() {
        try {
            const response = await fetch(`${this.url}?api_key=${api_key}&language=en-US&page=1`);
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
        }
    }
}

export default TopRated;
