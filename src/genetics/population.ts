import { Pair } from "@src/types/Pair";

export const generatePopulation = (numberPopulation: number): Pair[] => {
  const pairs: Pair[] = [];

  for (let index = 0; index < numberPopulation; index++) {
    pairs[index] = {
      X: Math.floor(Math.random() * 8),
      Y: Math.floor(Math.random() * 8),
    };
  }

  return pairs;
};
