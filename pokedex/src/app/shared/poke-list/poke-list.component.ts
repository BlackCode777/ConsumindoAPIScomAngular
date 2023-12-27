import { Component } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {
  private setAllPokemons: any;

  //@Output()
  public getAllPokemons: any;

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit() {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res: any) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      (error: any) => {
        this.apiError = true;
      }
    );
  }

// Para criar filtros de pesquisa comunicando com o componente pai, é necessário utilizar o EventEmitter
  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value); // pesquisa se a string digitada está contida no nome do pokemon
    });

    this.getAllPokemons = filter;
  }
}

/*
import EventEmitter
Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.

@usageNotes
Extends RxJS Subject for Angular by adding the emit() method.

In the following example, a component defines two output properties that create event emitters. When the title is clicked, the emitter emits an open or close event to toggle the current visibility state.


*@Component*  
({
selector: 'zippy',
template: `
<div class="zippy">
<div (click)="toggle()">Toggle</div>
<div [hidden]="!visible">
<ng-content></ng-content>
</div>
</div>`})
export class Zippy {
visible: boolean = true;  

*@Output* — () open: EventEmitter<any> = new EventEmitter();  

*@Output*  
() close: EventEmitter<any> = new EventEmitter();

toggle() {
this.visible = !this.visible;
if (this.visible) {
this.open.emit(null);
} else {
this.close.emit(null);
}
}
}
Access the event object with the $event argument passed to the output event handler:

<zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
@see — Observables in Angular

@publicApi

@publicApi
*/