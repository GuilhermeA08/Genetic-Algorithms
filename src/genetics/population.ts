import { Pair } from "@src/types/Pair";
import { calculeF } from "../utils/math";

/**
 * Gera população inicial
 * @param numberPopulation Quantidade de indivíduos na População inicial
 * @returns População - array de Pair
 */
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

export const populationRating = (population: Pair[]) => {
  //Calculando a aptidão de cada gene
  population.forEach((gene) => {
    gene.aptitude = calculeF(gene);
  });

  //Calculando a probabilidade de cada gene

  //Divisor
  let divider = 0;
  for (let i = 0; i < population.length; i++) {
    if (population[i].aptitude !== 0) divider += 1 / population[i].aptitude!;
  }

  population.forEach((gene) => {
    if (gene.aptitude !== 0) gene.probability = 1 / gene.aptitude! / divider;
    else gene.probability = 0;
  });
};

export const selectGenes = (genes: Pair[]) => {
  let length = genes.length / 2;

  for (let i = 0; i < length; i++) {
    const min = Math.min(...genes.map((item) => item.probability!));
    const pos = genes.map((e) => e.probability).indexOf(min);
    genes.splice(pos, 1);
  }
};
