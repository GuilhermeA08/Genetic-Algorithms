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
    else gene.probability = 1;
  });
};

export const selectGenes = (genes: Pair[]) => {
  sortGenes(genes);
  let sum = sumAptitude(genes);

  let length = genes.length / 2;
  let newGenes: Pair[] = [];

  let probability: number;

  for (let i = 0; i < length; i++) {
    probability = Math.random() * sum[sum.length - 1];

    for (let i = 0; i < genes.length; i++) {
      if (sum[i] > probability) {
        newGenes.push(genes[i]);
        break;
      }
    }
  }
  genes.splice(0, genes.length, ...newGenes);
};

export const sortGenes = (genes: Pair[]) => {
  genes.sort((a, b) => b.probability! - a.probability!);
};

const sumAptitude = (genes: Pair[]): number[] => {
  let sum = 0;
  let matriz: number[] = [];

  for (let i = 0; i < genes.length; i++) {
    sum += genes[i].aptitude!;
    matriz.push(sum);
  }

  return matriz;
};
