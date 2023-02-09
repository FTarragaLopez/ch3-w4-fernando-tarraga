import { ProtoCharacters } from '../models/proto.characters';

export const MOCK_CHARACTERS: ProtoCharacters[] = [
  {
    id: 1,
    role: 'King',
    name: 'Pepe',
    lastname: 'Pepin',
    boss: 'none',
    edad: 65,
    img: 'bronn.jpg',
    alive: true,
  },
  {
    id: 2,
    role: 'fighter',
    name: 'Pepe',
    lastname: 'Pepin',
    boss: 'king',
    edad: 32,
    img: 'daenerys.jpg',
    alive: true,
  },
  {
    id: 3,
    role: 'advisor',
    name: 'Ernesto',
    lastname: 'Ernestin',
    boss: 'fighter',
    edad: 48,
    img: 'jaime.jpg',
    alive: true,
  },
  {
    id: 4,
    role: 'slave',
    name: 'Julio',
    lastname: 'julito',
    boss: 'King',
    edad: 23,
    img: 'joffrey.jpg',
    alive: true,
  },
  {
    id: 5,
    role: 'figther',
    name: 'Julia',
    lastname: 'julita',
    boss: 'King',
    edad: 28,
    img: 'tyrion.jpg',
    alive: true,
  },
];
