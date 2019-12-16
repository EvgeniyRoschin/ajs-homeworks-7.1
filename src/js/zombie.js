/* eslint-disable linebreak-style */
import Character from './app';

export default class Zombie extends Character {
  constructor() {
    super();
    this.attack = 40;
    this.defense = 10;
  }
}
