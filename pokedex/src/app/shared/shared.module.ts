import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';

@NgModule({
  declarations: [
  
    PokeHeaderComponent,
       PokeListComponent,
       PokeSearchComponent
       
  ],
  exports: [

    PokeHeaderComponent,
    PokeListComponent,
    PokeSearchComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
