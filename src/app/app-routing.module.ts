import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './views/character/character.component';
import { CharacterlistComponent } from './views/characterlist/characterlist.component';

const routes: Routes = [
  {path: '', component: CharacterlistComponent},
  {path: 'character/:id', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
