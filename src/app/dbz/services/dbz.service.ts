import { UUIDTypes } from './../../../../node_modules/uuid/dist/cjs-browser/types.d';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  public characters: Character [] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];
  addCharacter(character: Character): void{
    character.id = uuid();
    //const newCharacter: Character = { id: uuid(), ...character};
    this.characters.push(character);
  }
  /*onDeleteCharacter(index: number){
    this.characters.splice(index, 1);
  }*/
  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character=> character.id !== id);
  }
}
