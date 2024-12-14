import { api_key, base_url } from "../config";

export class Video{
    constructor(id){
        this.id = id;
    }

    async getVideo(){
        const response = await fetch(`${base_url}/movie/${this.id}/videos?api_key=${api_key}`);
        this.data = await response.json(); 
        console.log(this.data);
    }
}
