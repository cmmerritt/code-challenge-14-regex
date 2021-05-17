import { sortByChildren, replaceZeros, validatePin, validateWord } from './code-challenge-14';

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('given a string, uses Regex to replace all 0 with the word zero', () => {
    expect(replaceZeros('10432060')).toStrictEqual('1zero432zero6zero');
  });
});

describe('Testing challenge 3', () => {
  test('given a string, if it has four numerical digits, return true', () => {
    expect(validatePin('1144')).toBe(true);
    expect(validatePin('97214')).toBe(false);
  });
});

describe('Testing challenge 3', () => {
  test('if the word is between 5 and 10 characters long, return true, else false', () => {
    expect(validateWord('supercalifragilistic')).toBe(false);
    expect(validateWord('gritty')).toBe(true);
  });
});


