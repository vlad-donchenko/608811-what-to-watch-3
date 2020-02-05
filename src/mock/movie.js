import {GENRES} from "../const";

const movieNames = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

const getRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const getRandomArrayItem = (elements) => {
  const element = elements[getRandomInteger(0, elements.length - 1)];
  return element;
};

const getMovie = () => {
  return {
    name: getRandomArrayItem(movieNames),
    genre: getRandomArrayItem(GENRES),
    date: getRandomDate(new Date(getRandomInteger(1990, 2020), getRandomInteger(0, 12), getRandomInteger(0, 30)), new Date()),
  };
};

export {getMovie};
