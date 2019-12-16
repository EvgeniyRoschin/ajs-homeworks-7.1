/* eslint-disable linebreak-style */
import Bowman from '../bowman';
// eslint-disable-next-line import/no-unresolved
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Bowman', () => {
  const bowman = new Bowman();
  expect(bowman.health).toBe(100);
});

test('Daemon', () => {
  const daemon = new Daemon();
  expect(daemon.health).toBe(100);
});

test('Magician', () => {
  const magician = new Magician();
  expect(magician.health).toBe(100);
});

test('Swordsman', () => {
  const swordsman = new Swordsman();
  expect(swordsman.health).toBe(100);
});

test('Undead', () => {
  const undead = new Undead();
  expect(undead.health).toBe(100);
});

test('Zombie', () => {
  const zombie = new Zombie();
  expect(zombie.health).toBe(100);
});
