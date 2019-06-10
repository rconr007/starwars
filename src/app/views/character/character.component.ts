import { Component, OnInit } from '@angular/core';
import { StarwarsService } from 'src/app/services/starwars.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characterInfo: any;
  filmsList: any;
  id: any;
  subscriptions: Array<Subscription> = [];
  errorMsg: string;
  
  constructor(private starwarsService:StarwarsService,
              private router: Router, 
              private activatedRouter: ActivatedRoute,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
                  iconRegistry.addSvgIcon(
                      'movie',
                      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/baseline-theaters-24px.svg'));                
              }

  ngOnInit() {
    let params: Params = this.activatedRouter.params;
    this.id = params._value.id;
    console.log('params',params,this.id);
    this.subscriptions.push(
      this.starwarsService.getFilmsInfo(this.id)
        .subscribe( data => {
          console.log(data);
          let filmsList: any = data;
          filmsList.sort( (a,b) => { 
            if(a['release_date'] > b['release_date']) return 0
            else if(b['release_date'] > a['release_date']) return -1; return 1;
          });
          console.log('filmsList',data);
          this.filmsList = filmsList;
          this.characterInfo = this.starwarsService.character;
          console.log('characterInfo:', this.characterInfo)
          this.errorMsg = '';
        }, error => this.showError('Error, the FORCE was unable to read a list of Movies for his character...'))
    );
  }

  showError(error: string){
    this.errorMsg = error;
  }

  goBackToList(){
    this.router.navigateByUrl('/');
  }

  ngOnDestroy(){
    this.subscriptions.forEach( subscription => { subscription.unsubscribe()});
  }

}

