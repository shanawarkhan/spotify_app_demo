import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl:'search.component.html'
})

export class SearchComponent {
    searchStr:string;

    constructor(private _spotifyService:SpotifyService){

    }

    // searchMusic(){
    //     console.log(this.searchStr);
    // }

    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr).subscribe(res => {
            console.log(res);
            console.log(this.searchStr);
        });
    }
}
