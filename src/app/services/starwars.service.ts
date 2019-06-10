import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable, forkJoin } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  url: string = 'https://swapi.co/api/people/';
  characters: Array<Character>;
  character: any;

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get("./assets/characters.json");
  }

  getCharacterInfo(id: string){
    return this.http.get(`${this.url}${id}/`);
  }
/*
  getCharacterFilmsInfo(id: string){
    return  this.http.get(`${this.url}${id}/`)
            .pipe(
              flatMap(result =>{
                return Observable.forkJoin(
                  result.map(character => this.http.get(character.films))
                )
              })
            )
  }
*/
  getFilmsInfo(id: string){
    return this.http.get(`${this.url}${id}/`)
           .pipe(
             tap( character => this.character = character),
             switchMap( character => {
               console.log(character)
              const promises = character['films']
                .map( film => this.http.get(film));
              // tap( character => console.log(promises));
              return forkJoin( promises )
              //  let films = character['films']
              //  films.array.forEach(film => {
                // console.log("Film:",film);
                
              //  });;
              // })
              // , (character, results) => {
              //   console.log("Results",results);
              //    return character;
              //.map(resultArray => character['films'] = resultArray)
              //.map( _ => item)
              // })
            })
        );
  }

}
