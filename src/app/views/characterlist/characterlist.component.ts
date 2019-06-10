import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-characterlist',
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.scss']
})
export class CharacterlistComponent implements OnInit {
  characters: Array<Character>;

  constructor(private starwarsService: StarwarsService) { }

  ngOnInit() {
    this.starwarsService.getCharacters()
      .subscribe( (data: Array<Character>) => {
        console.log('characters', data['characters']);
        this.characters = data['characters'];
        this.characters.map( character => {
          let removedLastSlash = character.url.slice(0,character.url.length -1);
          let lastSlash = removedLastSlash.lastIndexOf('/');
          let id = removedLastSlash.slice(lastSlash+1);
          character.id = id ==='unknown' ? '0' : id;
          console.log(character.id);
        })
      })    
  }

}
