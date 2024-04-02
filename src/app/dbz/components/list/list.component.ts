import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListDbzComponent {

  @Input()
public characterList: Character[] = [
  {
    name: 'Trunks',
    power: 10,
  }
]

@Output()
//public onDelete: EventEmitter<number>  = new EventEmitter();
//es gual al amterior
public onDelete = new EventEmitter<string>();


onDeleteCharacter(id?: string): void{
  if  (!id) return;
  console.log({id})

  this.onDelete.emit(id);
}



 }
